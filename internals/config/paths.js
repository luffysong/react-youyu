const fs = require('fs');
const path = require('path');

const appDirectory = path.resolve(__dirname, '../..');
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp);

module.exports = {
  ROOT: appDirectory,
  PUBLIC: resolveApp('build/client'),
  appSrc: resolveApp('app'),
  public: resolveApp('public'),
  packageJson: resolveApp('package.json'),
  indexJs: resolveApp('app/client/index.js'),
  indexHtml: resolveApp('app/client/index.html'),
  clientSrc: resolveApp('app/client'),
  clientBuild: resolveApp('build/client'),
  serverSrc: resolveApp('app/server'),
  serverBuild: resolveApp('build/server'),
  testsSetup: resolveApp('app/client/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  assetFilePath: resolveApp('build/asset-manifest.json'),
  statFilePath: resolveApp('build/webpack-stat.json'),
  nodePaths: nodePaths
};
