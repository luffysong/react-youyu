/**
 * InitialMgmt selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectInitialMgmtDomain = () => (state) => state.initialMgmt;

const makeSelectInitialMgmt = () => createSelector(
  selectInitialMgmtDomain(),
  (substate) => substate.toJS()
);

export default makeSelectInitialMgmt;
export {
  selectInitialMgmtDomain,
};
