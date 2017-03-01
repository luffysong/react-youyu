require("babel-core/register");
require("babel-polyfill");
var Webpack_isomorphic_tools = require('webpack-isomorphic-tools');

var project_base_path = require('path').resolve(__dirname, '../..');

global.webpack_isomorphic_tools = new Webpack_isomorphic_tools(require('../../internals/webpack/webpack-isomorphic-tools'))
  .server(project_base_path, function() {
    require("./index.js");
  });

