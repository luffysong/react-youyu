/**
 * AcceptPay reducer
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
  tradeInfoLoading: true,
  tradeInfoError: false,
  tradeInfoData: false,
});

function acceptPayReducer(state = initialState, action) {
  switch (action.type) {
    case types.TRADE_INFO:
      return state
        .set('tradeInfoLoading', true);
    case types.TRADE_INFO_SUC:
      return state
        .set('tradeInfoLoading', false)
        .set('tradeInfoData', action.data);
    case types.TRADE_INFO_ERR:
      return state
        .set('tradeInfoLoading', false)
        .set('tradeInfoError', action.error);
    default:
      return state;
  }
}

export default acceptPayReducer;
