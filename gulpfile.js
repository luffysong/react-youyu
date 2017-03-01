/**
 * External dependencies
 */
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const spawn = require('child_process').spawn;
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * Internal dependencies
 */

gulp.task('server:watch', () => {
  const stream = nodemon({
    script: `app/server/run.js`,
    ext: 'js json',
    watch: ['app/server', 'internals'],
    stdout: false,
    readable: false,
    debug: true,
    env: {
      NODE_ENV: 'production',
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
