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
  projectLoading: true,
  projectData: false,
  projectError: false,
});

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECT:
      return state
        .set('projectLoading', true);
    case types.LOAD_PROJECT_SUC:
      return state
        .set('projectLoading', false)
        .set('projectData', action.data);
    case types.LOAD_PROJECT_ERR:
      return state
        .set('projectLoading', false)
        .set('projectError', action.err);
    default:
      return state;
  }
}

export default projectReducer;
