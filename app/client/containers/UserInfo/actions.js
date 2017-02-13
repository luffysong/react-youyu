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
import { getUID } from '../../utils/user';

export function loadUserInfo() {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_USER_INFO,
    });
    get(`/user/${getUID()}`).then(data => {
      dispatch(loadUserInfoSuc(data));
    }).catch(err => {
      dispatch(loadUserInfoErr(err));
    });
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
