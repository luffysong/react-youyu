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
  quoteLoading: true,
  quoteError: false,
  quoteData: false,
});

function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case types.INITIAL_QUOTE:
      return state
        .set('quoteLoading', true);
    case types.INITIAL_QUOTE_SUC:
      return state
        .set('quoteLoading', false)
        .set('quoteData', action.data);
    case types.INITIAL_QUOTE_ERR:
      return state
        .set('quoteLoading', false)
        .set('quoteError', action.error);
    default:
      return state;
  }
}

export default quoteReducer;
