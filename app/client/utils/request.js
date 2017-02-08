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

export default function request(url, options) {
  url = config.apiBase + url;

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
