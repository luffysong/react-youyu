/**
 * OrderMgmt selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectOrderMgmtDomain = () => (state) => state.orderMgmt;

const makeSelectOrderMgmt = () => createSelector(
  selectOrderMgmtDomain(),
  (substate) => substate.toJS()
);

export default makeSelectOrderMgmt;
export {
  selectOrderMgmtDomain,
};
