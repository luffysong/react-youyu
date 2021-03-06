/**
 * AcceptConfirm actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get, post} from '../../utils/request';
import { getUID } from '../../utils/user';

/*下单*/
export function placeOrder(params, callback) {
  return (dispatch) => {
    dispatch({
      type: types.PLACE_ORDER,
    });
    return post('/movie/order', params).then((data) => {
      dispatch(placeOrderSuc(data));
      callback(data);
    });
  };
}

export function placeOrderSuc(data) {
  return {
    type: types.PLACE_ORDER_SUC,
    data,
  };
}

export function placeOrderErr(error) {
  return {
    type: types.PLACE_ORDER_ERR,
    error,
  };
}

/*获取订单信息*/
export function orderInfo(id) {
  return (dispatch) => {
    dispatch({
      type: types.ORDER_INFO,
    });
    return get(`/movie/order/listing/${id}`).then((data) => {
      dispatch(orderInfoSuc(data));
    }).catch(err => {
      dispatch(orderInfoErr(err));
    });
  };
}

export function orderInfoSuc(data) {
  return {
    type: types.ORDER_INFO_SUC,
    data,
  };
}

export function orderInfoErr(error) {
  return {
    type: types.ORDER_INFO_ERR,
    error,
  };
}


/*获取个人信息*/
export function userInfo(id) {
  return (dispatch) => {
    dispatch({
      type: types.USER_INFO,
    });
    return get(`/user/${getUID()}`).then((data) => {
      dispatch(userInfoSuc(data));
    });
  };
}

export function userInfoSuc(data) {
  return {
    type: types.USER_INFO_SUC,
    data,
  };
}

export function userInfoErr(error) {
  return {
    type: types.USER_INFO_ERR,
    error,
  };
}
