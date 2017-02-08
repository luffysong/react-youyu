/**
 * Home sagas
 */

/**
 * External dependencies
 */
import { take, call, put, takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

/**
 * Internal dependencies
 */
import request from '../../utils/request';
import * as actions from './actions';
import * as types from './constants';

export function* handleProjects() {
  try {
    const data = yield call(request, '/movie/projects');
    yield put(actions.loadProjectsSuc(data));
  } catch (err) {
    yield put(actions.loadProjectsErr(err));
  }
}

export function* loadProjects() {
  const watcher = yield takeLatest(types.LOAD_PROJECTS, handleProjects);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  loadProjects,
];
