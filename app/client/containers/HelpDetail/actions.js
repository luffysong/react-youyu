/**
 * HelpDetail actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get } from '../../utils/request';

export function loadNewsDetail(id) {
  return dispatch => {
    dispatch({
      type: types.LOAD_NEWS_DETAIL,
      id,
    });
    get(`/news/${id}`).then(data => {
      dispatch(loadNewsDetailSuc(id, data.info));
    }).catch(err => {
      dispatch(loadNewsDetailErr(id, err));
    });
  }
}

export function loadNewsDetailSuc(id, data) {
  return {
    type: types.LOAD_NEWS_DETAIL_SUC,
    id,
    data,
  };
}

export function loadNewsDetailErr(id, err) {
  return {
    type: types.LOAD_NEWS_DETAIL_ERR,
    id,
    err,
  };
}
