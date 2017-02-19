/**
 * UserInfo actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';
import { getUID, getUserInfo } from '../../utils/user';

export function loadUserInfo() {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_USER_INFO,
    });
    console.log(new Date());
    getUserInfo(data => {
      dispatch(loadUserInfoSuc(data));
    }, err => {
      dispatch(loadUserInfoErr(err));
    })
  }
}

export function loadUserInfoSuc(data) {
  return {
    type: types.LOAD_USER_INFO_SUC,
    data,
  };
}

export function loadUserInfoErr(err) {
  return {
    type: types.LOAD_USER_INFO_ERR,
    err,
  };
}
