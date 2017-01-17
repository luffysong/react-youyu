/**
 * Register selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectRegisterDomain = () => (state) => state.register;

const makeSelectRegister = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRegister;
export {
  selectRegisterDomain,
};
