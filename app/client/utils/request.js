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

// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : config.apiBase;
// axios.defaults.headers.common['Z-BBS-X-XSRF-TOKEN'] = Cookie.get('Z-BBS-XSRF-TOKEN');
// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
  console.info('GET: ', url);

  if(params) {
    console.info('Params: ', params);
    url += `?${qs.stringify(params)}`;
  }

  return axios.get(url)
    .then(checkStatus)
    .then(checkError);
}

export function post(url, body) {
  console.info('POST: ', url);

  if (body) {
    console.info('Body: ', body)
  } else {
    body = {};
  }

  return axios.post(url, body)
    .then(checkStatus)
    .then(checkError);
}
