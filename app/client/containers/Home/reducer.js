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
  noticeLoading: true,
  noticeError: false,
  noticeData: false,
  bannerLoading: true,
  bannerError: false,
  bannerData: false,
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
    case types.HOME_NOTICE:
      return state
        .set('noticeLoading', true);
    case types.HOME_NOTICE_SUC:
      return state
        .set('noticeLoading', false)
        .set('noticeData', action.data);
    case types.HOME_NOTICE_ERR:
      return state
        .set('noticeLoading', false)
        .set('noticeError', action.error);
    case types.HOME_BANNER:
      return state
        .set('bannerLoading', true);
    case types.HOME_BANNER_SUC:
      return state
        .set('bannerLoading', false)
        .set('bannerData', action.data);
    case types.HOME_BANNER_ERR:
      return state
        .set('bannerLoading', false)
        .set('bannerError', action.error);
    default:
      return state;
  }
}

export default homeReducer;
