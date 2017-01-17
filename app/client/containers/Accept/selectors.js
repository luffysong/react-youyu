/**
 * Accept selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectAcceptDomain = () => (state) => state.accept;

const makeSelectAccept = () => createSelector(
  selectAcceptDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAccept;
export {
  selectAcceptDomain,
};
