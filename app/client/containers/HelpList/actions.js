/**
 * HelpList actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function loadList(columnId, page) {
  return dispatch => {
    dispatch({
      type: types.LOAD_HELP_LIST,
      columnId,
      page,
    });
    get(`/news`, {
      page,
      column_id: columnId,
      per_page: 10,
    }).then(data => {
      dispatch(loadListSuc(columnId, page, data.info));
    }, err => {
      dispatch(loadListErr(columnId, page, err));
    });
  };
}

export function loadListSuc(columnId, page, data) {
  return {
    type: types.LOAD_HELP_LIST_SUC,
    columnId,
    page,
    data,
  };
}

export function loadListErr(columnId, page, err) {
  return {
    type: types.LOAD_HELP_LIST_ERR,
    columnId,
    page,
    err,
  };
}
