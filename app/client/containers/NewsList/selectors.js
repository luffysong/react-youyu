/**
 * NewsList selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectNewsListDomain = () => (state) => state.newsList;

const makeSelectNewsList = () => createSelector(
  selectNewsListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNewsList;
export {
  selectNewsListDomain,
};
