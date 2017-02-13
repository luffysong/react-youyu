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

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }

  showError('网络错误，请刷新后重试');

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkError(response) {
  if (response.code === 0) {
    return response.data;
  }

  showError(response.msg);

  const error = new Error(response.code, response.msg);
  error.code = response.code;
  error.message = response.msg;
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
    .then(checkStatus)
    .then(checkError);
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

  return axios.post(url, body, {
    headers: {
      Accept: 'application/json',
      'Z-BBS-X-XSRF-TOKEN': Cookie.get('Z-BBS-XSRF-TOKEN'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(checkStatus)
    .then(checkError);
}
