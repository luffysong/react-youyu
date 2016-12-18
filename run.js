const ROOT = require('./internals/config/paths').ROOT;
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  require('./internals/webpack/webpack-isomorphic-tools')
);

global.nodeRequire = require;
global.regeneratorRuntime = require('regenerator-runtime');

global.webpackIsomorphicTools
  .server(ROOT, () => {
    require('./build/server/server');
  });
