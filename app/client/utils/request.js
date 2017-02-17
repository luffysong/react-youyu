/**
 * External dependencies
 */
import axios from 'axios';
import qs from 'query-string';
import Cookie from 'js-cookie';

/**
 * Internal dependencies
 */
import config from '../config';
import message from '../components/Message';

const showError = function (msg) {
  message.error(msg);
};

function sucCallback(response) {
  const data = response.data;
  if (data.code === 0) {
    return data.data;
  }

  showError(data.msg);

  const error = new Error(data.code, data.msg);
  error.code = data.code;
  error.message = data.msg;
  throw error;
}

function errCallback(response) {
  showError('网络错误，请刷新后重试');

  const error = new Error('网络错误');
  throw error;
}

export function get(url, params) {
  const urlPrefix = process.env.NODE_ENV === 'development' ? '/api' : config.apiBase;
  url = urlPrefix + url;

  console.info('GET: ', url);

  if(params) {
    console.info('Params: ', params);
    url += `?${qs.stringify(params)}`;
  }

  return axios.get(url, {
    headers: {
      Accept: 'application/json'
    },
  })
    .then(sucCallback, errCallback)
}

export function post(url, body) {
  const urlPrefix = process.env.NODE_ENV === 'development' ? '/api' : config.apiBase;
  url = urlPrefix + url;

  console.info('POST: ', url);

  if (body) {
    console.info('Body: ', body)
  } else {
    body = {};
  }

  return axios.post(url, qs.stringify(body), {
    headers: {
      Accept: 'application/json',
      'Z-BBS-X-XSRF-TOKEN': Cookie.get('Z-BBS-XSRF-TOKEN'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(sucCallback, errCallback)
}
