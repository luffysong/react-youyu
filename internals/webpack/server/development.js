const crypto = require('crypto');
const webpack = require('webpack');
const developmentConfig = require('./default');

developmentConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.SECRET_KEY': `"${crypto.randomBytes(8).toString('hex')}"`,
  }),
  new webpack.NoErrorsPlugin(),
  new webpack.NamedModulesPlugin()
);

module.exports = developmentConfig;
