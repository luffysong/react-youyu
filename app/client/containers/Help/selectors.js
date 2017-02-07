/**
 * Help selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectHelpDomain = () => (state) => state.help;

const makeSelectHelp = () => createSelector(
  selectHelpDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHelp;
export {
  selectHelpDomain,
};
