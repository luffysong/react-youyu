/**
 * ProjectList reducer
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
  projectListLoading: {},
  projectListError: {},
  projectListData: {},
});

function projectListReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECT_LIST:
      return state
        .setIn(['projectListLoading', action.page], true);
    case types.LOAD_PROJECT_LIST_SUC:
      return state
        .setIn(['projectListLoading', action.page], false)
        .setIn(['projectListData', action.page], action.data);
    case types.LOAD_PROJECT_LIST_ERR:
      return state
        .setIn(['projectListLoading', action.page], false)
        .setIn(['projectListError', action.page], action.error);
    default:
      return state;
  }
}

export default projectListReducer;
