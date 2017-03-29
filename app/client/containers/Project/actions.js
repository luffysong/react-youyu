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

export function loadProject(id, callback) {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_PROJECT,
      id,
    });

    get(`/movie/project/${id}`).then(data => {
      dispatch(loadProjectSuc(id, data));
      callback();
    }, err => {
      dispatch(loadProjectErr(id, err));
      callback();
    });
  }
}

export function loadProjectErr(id, err) {
  return {
    type: types.LOAD_PROJECT_ERR,
    id,
    err,
  };
}

export function loadProjectSuc(id, data) {
  return {
    type: types.LOAD_PROJECT_SUC,
    id,
    data,
  };
}
