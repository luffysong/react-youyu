/**
 * Home actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function loadProjects() {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_PROJECTS,
    });
    return get('/movie/projects', {
      is_hot: 1,
    }).then(data => {
      dispatch(loadProjectsSuc(data.data));
    }, err => {
      dispatch(loadProjectsErr(err));
    });
  };
}

export function loadProjectsSuc(data) {
  return {
    type: types.LOAD_PROJECTS_SUC,
    data,
  };
}

export function loadProjectsErr(error) {
  return {
    type: types.LOAD_PROJECTS_ERR,
    error,
  };
}

export function homeNotice() {
  return (dispatch) => {
    dispatch({
      type: types.HOME_NOTICE,
    });
    return get('/news?pid=18').then(data => {
      dispatch(homeNoticeSuc(data));
    }, err => {
      dispatch(homeNoticeErr(err));
    });
  };
}

export function homeNoticeSuc(data) {
  return {
    type: types.HOME_NOTICE_SUC,
    data,
  };
}

export function homeNoticeErr(error) {
  return {
    type: types.HOME_NOTICE_ERR,
    error,
  };
}

export function homeBanner() {
  return (dispatch) => {
    dispatch({
      type: types.HOME_BANNER,
    });
    return get('/images?type=1').then(data => {
      dispatch(homeBannerSuc(data));
    }, err => {
      dispatch(homeBannerErr(err));
    });
  };
}

export function homeBannerSuc(data) {
  return {
    type: types.HOME_BANNER_SUC,
    data,
  };
}

export function homeBannerErr(error) {
  return {
    type: types.HOME_BANNER_ERR,
    error,
  };
}
