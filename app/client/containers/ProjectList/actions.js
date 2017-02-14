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

export function loadProjectList() {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_PROJECT_LIST,
    });
    return get('/movie/projects').then(data => {
      dispatch(loadProjectListSuc(data));
    }).catch(err => {
      dispatch(loadProjectListErr(err));
    });
  };
}

export function loadProjectListSuc(data) {
  return {
    type: types.LOAD_PROJECT_LIST_SUC,
    data,
  };
}

export function loadProjectListErr(error) {
  return {
    type: types.LOAD_PROJECT_LIST_ERR,
    error,
  };
}
