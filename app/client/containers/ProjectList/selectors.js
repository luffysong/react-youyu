/**
 * ProjectList selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectProjectListDomain = () => (state) => state.projectList;

const makeSelectProjectList = () => createSelector(
  selectProjectListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProjectList;
export {
  selectProjectListDomain,
};
