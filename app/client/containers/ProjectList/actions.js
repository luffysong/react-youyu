/**
 * ProjectList actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function loadProjectList(page) {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_PROJECT_LIST,
      page,
    });
    get('/movie/projects', {
      page,
      per_page: 10,
    }).then(data => {
      dispatch(loadProjectListSuc(page, data.data));
    }, err => {
      dispatch(loadProjectListErr(page, err));
    });
  };
}

export function loadProjectListSuc(page, data) {
  return {
    type: types.LOAD_PROJECT_LIST_SUC,
    page,
    data,
  };
}

export function loadProjectListErr(page, error) {
  return {
    type: types.LOAD_PROJECT_LIST_ERR,
    page,
    error,
  };
}
