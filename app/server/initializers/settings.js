const { ROOT, PUBLIC } = global.nodeRequire('./internals/config/paths');

const settings = {
  path: {
    ROOT,
    PUBLIC,
    TEMPLATES_DIR: 'app/server/templates',
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  assetManifest: (global.webpackIsomorphicTools && global.webpackIsomorphicTools.assets()) || {},
};

export default settings;
