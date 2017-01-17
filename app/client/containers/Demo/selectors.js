/**
 * Demo selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectDemoDomain = () => (state) => state.get('demo');

const makeSelectDemo = () => createSelector(
  selectDemoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDemo;
export {
  selectDemoDomain,
};
