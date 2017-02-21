/**
 * External dependencies
 */
const url = require('url');
const webpack = require('webpack');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('../webpack-isomorphic-tools'));

/**
 * Internal dependencies
 */
const paths = require('../../config/paths');
const getClientEnvironment = require('../../config/env');

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return path + '/';
  } else {
    return path;
  }
}

const homepagePath = require(paths.packageJson).homepage;
const homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';
const publicPath = ensureSlash(homepagePathname, true);
const publicUrl = ensureSlash(homepagePathname, false);
const env = getClientEnvironment(publicUrl);

if (env['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  bail: true,
  entry: [
    require.resolve('../../config/polyfills'),
    paths.indexJs
  ],
  output: {
    path: paths.clientBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: publicPath
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', '.jsx', ''],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.clientSrc
      }
    ],
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.(css|less)$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.clientSrc,
        loaders: [
          'babel',
          'strip-loader?strip[]=debug,strip[]=console.log,strip[]=console.info'
        ]
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('css?-autoprefixer!less!postcss')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loaders: [
          'file?name=static/media/[name].[hash:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ]
      }),
      pxtorem({
        propList: ['*'],
        rootValue: 20,
        replace: true,
      }),
    ];
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.indexHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    // new PreloadWebpackPlugin(),
    new webpack.DefinePlugin(env),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common'],
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css', {
      allChunks: true,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    webpackIsomorphicToolsPlugin,
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
