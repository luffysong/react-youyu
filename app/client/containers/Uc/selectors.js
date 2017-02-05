/**
 * Uc selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectUcDomain = () => (state) => state.uc;

const makeSelectUc = () => createSelector(
  selectUcDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUc;
export {
  selectUcDomain,
};
