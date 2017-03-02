/**
 * Help actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function loadMenu() {
  return dispatch => {
    dispatch({
      type: types.LOAD_HELP_MENU,
    });
    get(`/news-column?pid=19`).then(data => {
      dispatch(loadMenuSuc(data));
    }, err => {
      dispatch(loadMenuErr(err));
    });
  }
}

export function loadMenuSuc(data) {
  return {
    type: types.LOAD_HELP_MENU_SUC,
    data,
  };
}

export function loadMenuErr(err) {
  return {
    type: types.LOAD_HELP_MENU_SUC,
    err,
  };
}
