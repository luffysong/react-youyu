/**
 * InitialMgmt actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function getInitialList(status, page) {
  return dispatch => {
    dispatch({
      type: types.GET_INITIAL_LIST,
      status,
      page,
    });
    get(`/movie/initial-quote/list/${status}`, {
      page,
      per_page: 10,
    }).then(data => {
      dispatch(getInitialListSuc(status, page, data));
    }, err => {
      dispatch(getInitialListErr(status, page, err));
    });
  }
}

export function getInitialListSuc(status, page, data) {
  return {
    type: types.GET_INITIAL_LIST_SUC,
    status,
    page,
    data,
  };
}

export function getInitialListErr(status, page, err) {
  return {
    type: types.GET_INITIAL_LIST_ERR,
    status,
    page,
    err,
  };
}

