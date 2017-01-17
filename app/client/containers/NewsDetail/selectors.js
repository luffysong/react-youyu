/**
 * NewsDetail selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectNewsDetailDomain = () => (state) => state.newsDetail;

const makeSelectNewsDetail = () => createSelector(
  selectNewsDetailDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNewsDetail;
export {
  selectNewsDetailDomain,
};
