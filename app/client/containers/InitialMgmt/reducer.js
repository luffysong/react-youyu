/**
 * InitialMgmt reducer
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
  initialListData: {},
  initialListLoading: {},
  initialListError: {},
});

function initialMgmtReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_INITIAL_LIST:
      return state
        .setIn(['initialListLoading', action.status, action.page], true);
    case types.GET_INITIAL_LIST_SUC:
      return state
        .setIn(['initialListLoading', action.status, action.page], false)
        .setIn(['initialListData', action.status, action.page], action.data);
    case types.GET_INITIAL_LIST_ERR:
      return state
        .setIn(['initialListLoading', action.status, action.page], false)
        .setIn(['initialListError', action.status, action.page], action.err);
    default:
      return state;
  }
}

export default initialMgmtReducer;
