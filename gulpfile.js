/**
 * External dependencies
 */
const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const spawn = require('child_process').spawn;
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * Internal dependencies
 */
const serverProductionConfig = require('./internals/webpack/server/production');
const serverDevelopmentConfig = require('./internals/webpack/server/development');

gulp.task('webpack:production', (done) => webpackProcess(done, serverProductionConfig));

gulp.task('webpack:development', (done) => webpackProcess(done, serverDevelopmentConfig));

gulp.task('server:build', ['webpack:production']);

gulp.task('server:watch', ['webpack:development'], () => {
  const env = process.env.NODE_ENV || 'development';
  const stream = nodemon({
    script: `run.js`,
    ext: 'js json',
    watch: ['app/server', 'internals'],
    stdout: false,
    readable: false,
    tasks: ['webpack:server'],
    debug: true,
    env: {
      DEBUG: process.env.DEBUG || 'ing:*',
      NODE_ENV: env,
    },
  }).on('readable', function() {
    let bunyan;
    bunyan && bunyan.kill();
    bunyan = spawn('./node_modules/bunyan/bin/bunyan', [
      '--output', 'short',
      '--color',
    ]);
    bunyan.stdout.pipe(process.stdout);
    bunyan.stderr.pipe(process.stderr);
    this.stdout.pipe(bunyan.stdin);
    this.stderr.pipe(bunyan.stdin);
  });
  stream
    .on('restart', function () {
      console.log('Nodemon restarted!')
    })
    .on('crash', function() {
      console.error('Application has crashed!\n');
      stream.emit('restart', 10);
    })
});

function webpackProcess(done, config) {
  webpack(config).run((err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({
      hash: false,
      colors: true,
      cached: false,
      chunks: false,
      modules: false,
      version: false,
      children: false,
      cachedAssets: false,
    }));
    done();
  });
}

gulp.task('dict', () => {
  const API_ENV = process.env.API_ENV;
  if (!API_ENV) {
    console.log('请提供 API 环境 <test 01~12, prod>');
    return false;
  }
  const dictApi = `http://${API_ENV === 'prod' ? '' : API_ENV + '.'}youyu.top/api/dict`;
  axios.get(dictApi).then(res => {
    const data = _.get(res, 'data.data');
    if (!data) {
      return false;
    }
    const filePath = path.join(__dirname, 'app/client/utils/dict.json');
    fs.writeFile(filePath, JSON.stringify(data), 'utf8', () => {
      console.log('字典文件写入成功~');
      console.log(`保存路径：${filePath}`);
    });
  }).catch(err => {
    console.error(err);
  });
});
