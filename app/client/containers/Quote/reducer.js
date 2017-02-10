/**
 * Quote reducer
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
  initialQuoteLoading: true,
  initialQuoteError: false,
  initialQuoteData: false,
  initialInfoLoading: true,
  initialInfoError: false,
  initialInfoData: false,
  rightsQuoteLoading: true,
  rightsQuoteError: false,
  rightsQuoteData: false,
  rightsInfoLoading: true,
  rightsInfoError: false,
  rightsInfoData: false,
});

function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case types.INITIAL_QUOTE:
      return state
        .set('initialQuoteLoading', true);
    case types.INITIAL_QUOTE_SUC:
      return state
        .set('initialQuoteLoading', false)
        .set('initialQuoteData', action.data);
    case types.INITIAL_QUOTE_ERR:
      return state
        .set('initialQuoteLoading', false)
        .set('initialQuoteError', action.error);
    case types.INITIAL_INFO:
      return state
        .set('initialInfoLoading', true);
    case types.INITIAL_INFO_SUC:
      return state
        .set('initialInfoLoading', false)
        .set('initialInfoData', action.data);
    case types.INITIAL_INFO_ERR:
      return state
        .set('initialInfoLoading', false)
        .set('initialInfoError', action.error);
    case types.RIGHTS_QUOTE:
      return state
        .set('rightsQuoteLoading', true);
    case types.RIGHTS_QUOTE_SUC:
      return state
        .set('rightsQuoteLoading', false)
        .set('rightsQuoteData', action.data);
    case types.RIGHTS_QUOTE_ERR:
      return state
        .set('rightsQuoteLoading', false)
        .set('rightsQuoteError', action.error);
    case types.RIGHTS_INFO:
      return state
        .set('rightsInfoLoading', true);
    case types.RIGHTS_INFO_SUC:
      return state
        .set('rightsInfoLoading', false)
        .set('rightsInfoData', action.data);
    case types.RIGHTS_INFO_ERR:
      return state
        .set('rightsInfoLoading', false)
        .set('rightsInfoError', action.error);
    default:
      return state;
  }
}

export default quoteReducer;
