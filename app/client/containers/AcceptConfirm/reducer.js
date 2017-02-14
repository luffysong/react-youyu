/**
 * AcceptConfirm reducer
 */

/**
 * External dependencies
 */
import { fromJS } from 'immutable';

/**
 * Internal dependencies
 */
import * as types from './constants';

const initialState = fromJS({
  placeOrderLoading: true,
  placeOrderError: false,
  placeOrderData: false,
  orderInfoLoading: true,
  orderInfoError: false,
  orderInfoData: false,
  tradeInfoLoading: true,
  tradeInfoError: false,
  tradeInfoData: false,
  userInfoLoading: true,
  userInfoError: false,
  userInfoData: false,
});

function acceptConfirmReducer(state = initialState, action) {
  switch (action.type) {
    case types.PLACE_ORDER:
      return state
        .set('placeOrderLoading', true);
    case types.PLACE_ORDER_SUC:
      return state
        .set('placeOrderLoading', false)
        .set('placeOrderData', action.data);
    case types.PLACE_ORDER_ERR:
      return state
        .set('placeOrderLoading', false)
        .set('placeOrderError', action.error);
    case types.ORDER_INFO:
      return state
        .set('orderInfoLoading', true);
    case types.ORDER_INFO_SUC:
      return state
        .set('orderInfoLoading', false)
        .set('orderInfoData', action.data);
    case types.ORDER_INFO_ERR:
      return state
        .set('orderInfoLoading', false)
        .set('orderInfoError', action.error);
    case types.USER_INFO:
      return state
        .set('userInfoLoading', true);
    case types.USER_INFO_SUC:
      console.log(action);
      return state
        .set('userInfoLoading', false)
        .set('userInfoData', action.data);
    case types.USER_INFO_ERR:
      return state
        .set('userInfoLoading', false)
        .set('userInfoError', action.error);
    default:
      return state;
  }
}

export default acceptConfirmReducer;
