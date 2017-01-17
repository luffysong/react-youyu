/**
 * RightsMgmt selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectRightsMgmtDomain = () => (state) => state.rightsMgmt;

const makeSelectRightsMgmt = () => createSelector(
  selectRightsMgmtDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRightsMgmt;
export {
  selectRightsMgmtDomain,
};
