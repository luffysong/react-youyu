/**
 * External dependencies
 */
const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const spawn = require('child_process').spawn;

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

