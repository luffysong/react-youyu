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

export function getOrderList(status, page) {
  return {
    type: types.GET_ORDER_LIST,
    status,
    page,
  };
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
