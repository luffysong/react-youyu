/**
 * External dependencies
 */
import Cookie from 'js-cookie';

/**
 * Internal dependencies
 */

export function getUID() {
  return Cookie.get('kr_plus_id');
}

export function isLogin() {
  return !!getUID();
}
