/**
 * Home selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectHomeDomain = () => (state) => state.home;

const makeSelectHome = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHome;
export {
  selectHomeDomain,
};
