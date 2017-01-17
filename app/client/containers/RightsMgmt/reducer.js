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
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function rightsMgmtReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default rightsMgmtReducer;
