/**
 * Register actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { post } from '../../utils/request';

export function orgRegister(params) {
  return (dispatch) => {
    dispatch({
      type: types.ORG_REGISTER,
    });
    return post('/register/corporate', params).then((data) => {
      dispatch(orgRegisterSuc(data));
    });
  };
}

export function orgRegisterSuc(data) {
  return {
    type: types.ORG_REGISTER_SUC,
    data,
  };
}

export function orgRegisterErr(error) {
  return {
    type: types.ORG_REGISTER_ERR,
    error,
  };
}

// 个人注册
export function personalRegister(params) {
  return (dispatch) => {
    dispatch({
      type: types.PERSONAL_REGISTER,
    });
    return post('/register/personal', params).then((data) => {
      dispatch(personalRegisterSuc(data));
    });
  };
}

export function personalRegisterSuc(data) {
  return {
    type: types.PERSONAL_REGISTER_SUC,
    data,
  };
}

export function personalRegisterErr(error) {
  return {
    type: types.PERSONAL_REGISTER_ERR,
    error,
  };
}

export function personalForm(data) {
  return {
    type: types.PERSONAL_FORM,
    data,
  }
}
