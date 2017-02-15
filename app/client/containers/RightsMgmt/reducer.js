/**
 * RightsMgmt reducer
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
  rightsListData: {},
  rightsListLoading: {},
  rightsListError: {},
});

function rightsMgmtReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RIGHTS_LIST:
      return state
        .setIn(['rightsListLoading', action.status, action.page], true);
    case types.GET_RIGHTS_LIST_SUC:
      return state
        .setIn(['rightsListLoading', action.status, action.page], false)
        .setIn(['rightsListData', action.status, action.page], action.data);
    case types.GET_RIGHTS_LIST_ERR:
      return state
        .setIn(['rightsListLoading', action.status, action.page], false)
        .setIn(['rightsListError', action.status, action.page], action.err);
    default:
      return state;
  }
}

export default rightsMgmtReducer;
