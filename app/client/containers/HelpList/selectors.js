/**
 * HelpList selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectHelpListDomain = () => (state) => state.helpList;

const makeSelectHelpList = () => createSelector(
  selectHelpListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHelpList;
export {
  selectHelpListDomain,
};
