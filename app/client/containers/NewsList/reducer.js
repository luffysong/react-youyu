/**
 * NewsList reducer
 */

/**
 * External dependencies
 */
import { fromJS } from 'immutable';

/**
 * Internal dependencies
 */
import * as types from './constants';

const initialState = fromJS({
  newsListLoading: {},
  newsListData: {},
  newsListErr: {},
});

function newsListReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_NEWS_LIST:
      return state
        .setIn(['newsListLoading', action.pid], true);
    case types.LOAD_NEWS_LIST_SUC:
      return state
        .setIn(['newsListLoading', action.pid], false)
        .setIn(['newsListData', action.pid, action.page], action.data);
    case types.LOAD_NEWS_LIST_ERR:
      return state
        .setIn(['newsListLoading', action.pid], false)
        .setIn(['newsListError', action.pid], action.err);
    default:
      return state;
  }
}

export default newsListReducer;
