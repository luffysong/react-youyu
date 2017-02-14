/**
 * HelpDetail reducer
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
  data: {},
  loading: {},
  error: {},
});

function helpDetailReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_NEWS_DETAIL:
      return state
        .setIn(['loading', action.id], true);
    case types.LOAD_NEWS_DETAIL_SUC:
      return state
        .setIn(['loading', action.id], false)
        .setIn(['data', action.id], action.data);
    case types.LOAD_NEWS_DETAIL_ERR:
      return state
        .setIn(['loading', action.id], false)
        .setIn(['data', action.id], action.err);
    default:
      return state;
  }
}

export default helpDetailReducer;
