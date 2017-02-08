/**
 * Home reducer
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
  projectsLoading: true,
  projectsError: false,
  projectsData: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECTS:
      return state
        .set('projectsLoading', true);
    case types.LOAD_PROJECTS_SUC:
      return state
        .set('projectsLoading', false)
        .set('projectsData', action.data);
    case types.LOAD_PROJECTS_ERR:
      return state
        .set('projectsLoading', false)
        .set('projectsError', action.error);
    default:
      return state;
  }
}

export default homeReducer;
