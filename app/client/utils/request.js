/**
 * External dependencies
 */
import 'whatwg-fetch';

/**
 * Internal dependencies
 */
import config from '../config';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkError(response) {
  if (response.code === 0) {
    return response.data;
  }

  const error = new Error(response.code, response.msg);
  error.code = response.code;
  error.message = response.msg;
  throw error;
}

export default function request(url, options) {
  if (process.env.NODE_ENV === 'development') {
    url = '/api' + url;
  } else {
    url = config.apiBase + url;
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkError);
}
