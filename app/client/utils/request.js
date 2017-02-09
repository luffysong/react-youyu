/**
 * External dependencies
 */
import 'whatwg-fetch';
import jQuery from 'jquery';
import qs from 'query-string';
import Cookie from 'js-cookie';
console.log(jQuery);

/**
 * Internal dependencies
 */
import config from '../config';
import message from '../components/Message';

const showError = function (msg) {
  message.error(msg);
};

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

  showError(response.msg);

  const error = new Error(response.code, response.msg);
  error.code = response.code;
  error.message = response.msg;
  throw error;
}

export function get(url, params) {
  if (process.env.NODE_ENV === 'development') {
    url = '/api' + url;
  } else {
    url = config.apiBase + url;
  }
  console.info('GET: ', url);

  if(params) {
    console.info('Params: ', params);
    url += `?${qs.stringify(params)}`;
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    credentials: 'include',
  }).then(checkStatus)
    .then(parseJSON)
    .then(checkError);
}

export function post(url, body, headers) {
  if (process.env.NODE_ENV === 'development') {
    url = '/api' + url;
  } else {
    url = config.apiBase + url;
  }
  console.info('POST: ', url);

  if (body) {
    console.info('Body: ', body)
  }

  if (headers) {
    console.info('Headers: ', headers)
  }

  headers = {
    ...headers,
    'Z-BBS-X-XSRF-TOKEN': Cookie.get('Z-BBS-XSRF-TOKEN')
  };

  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const postHeaders = {
    ...defaultHeaders,
    ...headers
  };

  return fetch(url, {
    method: 'POST',
    headers: postHeaders,
    credentials: 'include',
    body: jQuery.param(body)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(checkError);
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
