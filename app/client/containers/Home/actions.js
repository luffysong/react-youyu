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
      page: 1,
    }).then((data) => {
      dispatch(loadProjectsSuc(data));
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
