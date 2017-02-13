/**
 * UserInfo reducer
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
  loading: true,
  data: false,
  error: false,
});

function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_USER_INFO:
      return state
        .set('loading', true);
    case types.LOAD_USER_INFO_SUC:
      return state
        .set('loading', false)
        .set('data', action.data);
    case types.LOAD_USER_INFO_ERR:
      return state
        .set('loading', false)
        .set('error', action.err);
    default:
      return state;
  }
}

export default userInfoReducer;
