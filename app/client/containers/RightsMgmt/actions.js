/**
 * RightsMgmt actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function getRightsList(status, page) {
  return dispatch => {
    dispatch({
      type: types.GET_RIGHTS_LIST,
      status,
      page,
    });
    get(`/movie/rights-quote/list/${status}`, {
      page,
      per_page: 10,
    }).then(data => {
      dispatch(getRightsListSuc(status, page, data));
    }, err => {
      dispatch(getRightsListErr(status, page, err));
    });
  }
}

export function getRightsListSuc(status, page, data) {
  return {
    type: types.GET_RIGHTS_LIST_SUC,
    status,
    page,
    data,
  };
}

export function getRightsListErr(status, page, err) {
  return {
    type: types.GET_RIGHTS_LIST_ERR,
    status,
    page,
    err,
  };
}
