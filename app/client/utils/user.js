/**
 * External dependencies
 */
import Cookie from 'js-cookie';
import infoCache from './infoCache';

/**
 * Internal dependencies
 */
import config from '../config';
import { get } from './request';

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

export function goToLogout() {
  const underUc = /youyu\.top\/uc\//.test(location.href);
  const baseUrl = `${location.protocol}//${location.host}`;
  let backUrl = '';

  if (underUc) {
    backUrl = baseUrl;
  } else {
    backUrl = encodeURIComponent(location.href);
  }

  location.href = `${config.apiBase}/passport/logout?return_to=${backUrl}`;
}

let userInfoCacheTime = (new Date()) - 0 + 100000;
let userInfoCallbackArr = [];
let userInfoLoading = false;
export function getUserInfo(sucCallback, errCallback) {
  const now = new Date() - 0;
  userInfoCallbackArr.push(sucCallback);
  if(userInfoLoading) {
    return;
  }
  if(now - userInfoCacheTime > 5000 || !infoCache.userInfo) {
    userInfoLoading = true;
    get(`/user/${getUID()}`).then(data => {
      infoCache.userInfo = data;
      userInfoCallbackArr.forEach((el) => {
        el(data)
      })
      userInfoLoading = false;
    }, err => {
      errCallback(err);
      userInfoLoading = false
    });
  } else {
    sucCallback(infoCache.userInfo);
  }
}
