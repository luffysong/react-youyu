/**
 * Help reducer
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
  loading: true,
  data: false,
  error: false,
});

function helpReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_HELP_MENU:
      return state
        .set('loading', true);
    case types.LOAD_HELP_MENU_SUC:
      return state
        .set('loading', false)
        .set('data', action.data);
    case types.LOAD_HELP_MENU_ERR:
      return state
        .set('loading', false)
        .set('error', action.err);
    default:
      return state;
  }
}

export default helpReducer;
