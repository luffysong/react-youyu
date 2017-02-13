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

export function loadNewsDetail(id) {
  return {
    type: types.LOAD_NEWS_DETAIL,
    id,
  };
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
