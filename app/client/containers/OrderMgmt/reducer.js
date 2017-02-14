/**
 * OrderMgmt reducer
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
  orderListData: {},
  orderListLoading: {},
  orderListError: {},
});

function orderMgmtReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ORDER_LIST:
      return state
        .setIn(['orderListLoading', action.status, action.page], true);
    case types.GET_ORDER_LIST_SUC:
      return state
        .setIn(['orderListLoading', action.status, action.page], false)
        .setIn(['orderListData', action.status, action.page], action.data);
    case types.GET_ORDER_LIST_ERR:
      return state
        .setIn(['orderListLoading', action.status, action.page], false)
        .setIn(['orderListError', action.status, action.page], action.err);
    default:
      return state;
  }
}

export default orderMgmtReducer;
