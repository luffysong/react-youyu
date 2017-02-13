/**
 * Layout reducer
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
  userInfo: {
    loading: true,
    data: false,
    error: false,
  },
});

function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_USER_INFO:
      return state
        .setIn(['userInfo', 'loading'], true);
    case types.LOAD_USER_INFO_SUC:
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'data'], action.data);
    case types.LOAD_USER_INFO_ERR:
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'error'], action.err);
    default:
      return state;
  }
}

export default userInfoReducer;
