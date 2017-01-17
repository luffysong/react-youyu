/**
 * HelpDetail selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectHelpDetailDomain = () => (state) => state.helpDetail;

const makeSelectHelpDetail = () => createSelector(
  selectHelpDetailDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHelpDetail;
export {
  selectHelpDetailDomain,
};
