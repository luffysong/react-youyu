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

const initPersonState = fromJS({
  loading: false,
  sucData: {},
  errData: {},
});

export function personRegisterReducer(state = initPersonState, action) {
  switch (action.type) {
    case types.PERSONAL_REGISTER:
      return state.set('loading', true);
    case types.PERSONAL_REGISTER_SUC:
      return state
      .set('loading', false)
      .set('sucData', action.data);
    case types.PERSONAL_REGISTER_ERR:
      return state;
    default:
      return state;
  }
}

const initPersonalFormState = {
  name: 1,
  id_card_number: 2432432,
  idcardimg: '',
  businesscardimg: '',
  type: 1,
  condition: 10,
};

export function personalForm(state = initPersonalFormState, action) {
  switch(action.type) {
    case types.PERSONAL_FORM:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  }
}

