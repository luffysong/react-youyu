/**
 * Project actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function loadProject(id) {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_PROJECT,
      id,
    });

    get(`/movie/project/${id}`).then(data => {
      loadProjectSuc(data);
    }).catch(err => {
      loadProjectErr(err);
    });
  }
}

export function loadProjectErr(id) {
  return {
    type: types.LOAD_PROJECT_ERR,
    id,
  };
}

export function loadProjectSuc(id) {
  return {
    type: types.LOAD_PROJECT_SUC,
    id,
  };
}
