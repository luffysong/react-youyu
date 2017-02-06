/**
 * AcceptConfirm selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectAcceptConfirmDomain = () => (state) => state.acceptConfirm;

const makeSelectAcceptConfirm = () => createSelector(
  selectAcceptConfirmDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAcceptConfirm;
export {
  selectAcceptConfirmDomain,
};
