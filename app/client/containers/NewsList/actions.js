/**
 * NewsList actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function loadNewsList(pid, page) {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_NEWS_LIST,
      pid,
    });
    get('/news', {
      pid,
      page,
      per_page: 10,
    }).then(data => {
      dispatch(loadNewsListSuc(pid, page, data.info));
    }).catch(err => {
      dispatch(loadNewsListErr(pid, err));
    });
  };
}

export function loadNewsListSuc(pid, page, data) {
  return {
    type: types.LOAD_NEWS_LIST_SUC,
    pid,
    page,
    data,
  };
}

export function loadNewsListErr(pid, err) {
  return {
    type: types.LOAD_NEWS_LIST_ERR,
    pid,
    err,
  };
}
