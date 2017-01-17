/**
 * Project selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectProjectDomain = () => (state) => state.project;

const makeSelectProject = () => createSelector(
  selectProjectDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProject;
export {
  selectProjectDomain,
};
