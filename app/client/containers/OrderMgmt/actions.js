/**
 * OrderMgmt actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function getOrderList(status, page) {
  return dispatch => {
    dispatch({
      type: types.GET_ORDER_LIST,
      status,
      page,
    });
    get('/movie/order').then(data => {
      dispatch(getOrderListSuc(status, page, data));
    }, err => {
      dispatch(getOrderListErr(status, page, err));
    });
  }
}

export function getOrderListSuc(status, page, data) {
  return {
    type: types.GET_ORDER_LIST_SUC,
    status,
    page,
    data,
  };
}

export function getOrderListErr(status, page, err) {
  return {
    type: types.GET_ORDER_LIST_ERR,
    status,
    page,
    err,
  };
}
