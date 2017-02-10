/**
 * Register reducer
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
  orgRegisterLoading: true,
  orgRegisterError: false,
  orgRegisterData: false,
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case types.ORG_REGISTER:
      return state
        .set('orgRegisterLoading', true);
    case types.ORG_REGISTER_SUC:
      return state
        .set('orgRegisterLoading', false)
        .set('orgRegisterData', action.data);
    case types.ORG_REGISTER_ERR:
      return state
        .set('orgRegisterLoading', false)
        .set('orgRegisterError', action.error);
    default:
      return state;
  }
}

export default registerReducer;
