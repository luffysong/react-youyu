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

const makeSelectProjectsLoading = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.get('projectsLoading')
);

const makeSelectProjectsData = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.get('projectsData')
);

const makeSelectProjectsError = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.get('projectsError')
);

export default makeSelectHome;

export {
  selectHomeDomain,
  makeSelectProjectsLoading,
  makeSelectProjectsData,
  makeSelectProjectsError,
};
