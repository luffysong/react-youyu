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

export function loadProjects() {
  return {
    type: types.LOAD_PROJECTS,
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
