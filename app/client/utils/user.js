/**
 * External dependencies
 */
import Cookie from 'js-cookie';

/**
 * Internal dependencies
 */
import config from '../config';

export function getUID() {
  return Cookie.get('kr_plus_id');
}

export function isLogin() {
  return !!getUID();
}

export function goToLogin(path) {
  const baseUrl = `${location.protocol}//${location.host}`;
  const backUrl = path ? (baseUrl + path) : encodeURIComponent(location.href);
  location.href = `${config.apiBase}/passport/login?from=${backUrl}`;
}

export function goToRegister(path) {
  const baseUrl = `${location.protocol}//${location.host}`;
  const backUrl = path ? (baseUrl + path) : encodeURIComponent(location.href);
  location.href = `${config.apiBase}/passport/register?ok_url=${backUrl}`;
}
