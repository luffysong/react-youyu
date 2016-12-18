process.env.PUBLIC_URL = '';
require('dotenv').config({silent: true});

const jest = require('jest');
const argv = process.argv.slice(2);

if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

var realWrite = process.stdout.write;
var CLEAR = process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H';
process.stdout.write = function(chunk, encoding, callback) {
  if (chunk === '\x1B[2J\x1B[H') {
    chunk = CLEAR;
  }
  return realWrite.call(this, chunk, encoding, callback);
};

jest.run(argv);
