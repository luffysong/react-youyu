// Env config
require('dotenv').config({silent: true});

/**
 * External dependencies
 */
const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const filesize = require('filesize');
const stripAnsi = require('strip-ansi');
const gzipSize = require('gzip-size').sync;
const recursive = require('recursive-readdir');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');

/**
 * Internal dependencies
 */
const paths = require('../config/paths');
const config = require('../webpack/client/production');

if (!checkRequiredFiles([paths.indexHtml, paths.indexJs])) {
  process.exit(1);
}

function removeFileNameHash(fileName) {
  return fileName
    .replace(paths.clientBuild, '')
    .replace(/\/?(.*)(\.\w+)(\.js|\.css)/, (match, p1, p2, p3) => p1 + p3);
}

function getDifferenceLabel(currentSize, previousSize) {
  const FIFTY_KILOBYTES = 1024 * 50;
  const difference = currentSize - previousSize;
  const fileSize = !Number.isNaN(difference) ? filesize(difference) : 0;
  if (difference >= FIFTY_KILOBYTES) {
    return chalk.red('+' + fileSize);
  } else if (difference < FIFTY_KILOBYTES && difference > 0) {
    return chalk.yellow('+' + fileSize);
  } else if (difference < 0) {
    return chalk.green(fileSize);
  } else {
    return '';
  }
}

recursive(paths.clientBuild, (err, fileNames) => {
  const previousSizeMap = (fileNames || [])
    .filter(fileName => /\.(js|css)$/.test(fileName))
    .reduce((memo, fileName) => {
      const contents = fs.readFileSync(fileName);
      const key = removeFileNameHash(fileName);
      memo[key] = gzipSize(contents);
      return memo;
    }, {});
  fs.emptyDirSync(paths.clientBuild);
  build(previousSizeMap);
  copyPublicFolder();
});

function printFileSizes(stats, previousSizeMap) {
  const assets = stats.toJson().assets
    .filter(asset => /\.(js|css)$/.test(asset.name))
    .map(asset => {
      const fileContents = fs.readFileSync(paths.clientBuild + '/' + asset.name);
      const size = gzipSize(fileContents);
      const previousSize = previousSizeMap[removeFileNameHash(asset.name)];
      const difference = getDifferenceLabel(size, previousSize);
      return {
        folder: path.join('build', path.dirname(asset.name)),
        name: path.basename(asset.name),
        size: size,
        sizeLabel: filesize(size) + (difference ? ' (' + difference + ')' : '')
      };
    });
  assets.sort((a, b) => b.size - a.size);
  const longestSizeLabelLength = Math.max.apply(null,
    assets.map(a => stripAnsi(a.sizeLabel).length)
  );
  assets.forEach(asset => {
    let sizeLabel = asset.sizeLabel;
    const sizeLength = stripAnsi(sizeLabel).length;
    if (sizeLength < longestSizeLabelLength) {
      const rightPadding = ' '.repeat(longestSizeLabelLength - sizeLength);
      sizeLabel += rightPadding;
    }
    console.log(
      '  ' + sizeLabel +
      '  ' + chalk.dim(asset.folder + path.sep) + chalk.cyan(asset.name)
    );
  });
}

function printErrors(summary, errors) {
  console.log(chalk.red(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
}

function build(previousSizeMap) {
  console.log(chalk.blue('Building client...'));
  webpack(config).run((err, stats) => {
    if (err) {
      printErrors('Failed to compile.', [err]);
      process.exit(1);
    }
    if (stats.compilation.errors.length) {
      printErrors('Failed to compile.', stats.compilation.errors);
      process.exit(1);
    }
    if (process.env.CI && stats.compilation.warnings.length) {
      printErrors('Failed to compile.', stats.compilation.warnings);
      process.exit(1);
    }
    console.log(chalk.green('Compiled successfully.'));
    console.log();
    console.log(chalk.cyan('File sizes after gzip:'));
    console.log();
    printFileSizes(stats, previousSizeMap);
    console.log();
  });
}

function copyPublicFolder() {
  fs.copySync(paths.public, paths.clientBuild, {
    dereference: true,
    filter: file => file !== paths.indexHtml
  });
}
