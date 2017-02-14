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
  projectListLoading: true,
  projectListError: false,
  projectListData: false,
});

function projectListReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECT_LIST:
      return state
        .set('projectListLoading', true);
    case types.LOAD_PROJECT_LIST_SUC:
      return state
        .set('projectListLoading', false)
        .set('projectListData', action.data);
    case types.LOAD_PROJECT_LIST_ERR:
      return state
        .set('projectListLoading', false)
        .set('projectListError', action.error);
    default:
      return state;
  }
}

export default projectListReducer;
