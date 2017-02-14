/**
 * HelpList reducer
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

function helpListReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_HELP_LIST:
      return state
        .setIn(['loading', action.columnId, action.page], true);
    case types.LOAD_HELP_LIST_SUC:
      return state
        .setIn(['loading', action.columnId, action.page], false)
        .setIn(['data', action.columnId, action.page], action.data);
    case types.LOAD_HELP_LIST_ERR:
      return state
        .setIn(['loading', action.columnId, action.page], false)
        .setIn(['error', action.columnId, action.page], action.err);
    default:
      return state;
  }
}

export default helpListReducer;
