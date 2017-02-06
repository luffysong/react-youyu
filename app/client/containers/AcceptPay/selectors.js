/**
 * AcceptPay selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectAcceptPayDomain = () => (state) => state.acceptPay;

const makeSelectAcceptPay = () => createSelector(
  selectAcceptPayDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAcceptPay;
export {
  selectAcceptPayDomain,
};
