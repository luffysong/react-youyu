/**
 * Project reducer
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
  projectLoading: {},
  projectData: {},
  projectError: {},
});

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECT:
      return state
        .setIn(['projectLoading', action.id], true);
    case types.LOAD_PROJECT_SUC:
      return state
        .setIn(['projectLoading', action.id], false)
        .setIn(['projectData', action.id], action.data);
    case types.LOAD_PROJECT_ERR:
      return state
        .setIn(['projectLoading', action.id], false)
        .setIn(['projectError', action.id], action.err);
    default:
      return state;
  }
}

export default projectReducer;
