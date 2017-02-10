/**
 * NewsDetail reducer
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
  newsDetailLoading: {},
  newsDetailData: {},
  newsDetailError: {},
});

function newsDetailReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_NEWS_DETAIL:
      return state
        .setIn(['newsDetailLoading', action.id], true);
    case types.LOAD_NEWS_DETAIL_SUC:
      return state
        .setIn(['newsDetailLoading', action.id], false)
        .setIn(['newsDetailData', action.id], action.data.info);
    case types.LOAD_NEWS_DETAIL_ERR:
      return state
        .setIn(['newsDetailLoading', action.id], false)
        .setIn(['newsDetailError', action.id], action.err);
    default:
      return state;
  }
}

export default newsDetailReducer;
