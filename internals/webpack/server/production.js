'use strict';

const _ = require('lodash');
const webpack = require('webpack');
const defaultConfig = require('./default');
const productionConfig = require('./default');

_.mergeWith(defaultConfig, {
  devtool: false,
});

productionConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
    sourceMap: false,
    mangle: {
      except: ['GeneratorFunction', 'GeneratorFunctionPrototype'],
    },
  })
);

module.exports = productionConfig;
