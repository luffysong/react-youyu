/**
 * External dependencies
 */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

/**
 * Internal dependencies
 */
const paths = require('./../../config/paths');
const assets = '(.css|.less|.scss|.gif|.jpg|.jpeg|.png|.svg|.ttf|.eot|.woff|.woff2)';

module.exports = {
  context: paths.ROOT,
  target: 'node',
  node: {
    __dirname: true,
    __filename: true,
  },
  entry: {
    server: [
      paths.serverSrc,
    ],
  },
  output: {
    path: paths.serverBuild,
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({
      whitelist: [/^webpack/],
    }),
    (context, request, callback) => {
      const regexp = new RegExp(`${assets}$`);

      return regexp.test(request)
        ? callback(null, `commonjs ${path.join(context.replace(paths.ROOT, './../'), request)}`)
        : callback();
    },
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./app'),
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: ['node_modules'],
        query: {
          presets: [
            'es2015',
            'stage-2'
          ],
          plugins: [
            'transform-runtime',
            'transform-async-to-generator',
          ],
        },
      },
    ],
  },
  plugins: [],
};
