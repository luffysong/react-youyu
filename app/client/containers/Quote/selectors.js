/**
 * Quote selectors
 */

/**
 * External dependencies
 */
import { createSelector } from 'reselect';

/**
 * Internal dependencies
 */

const selectQuoteDomain = () => (state) => state.quote;

const makeSelectQuote = () => createSelector(
  selectQuoteDomain(),
  (substate) => substate.toJS()
);

export default makeSelectQuote;
export {
  selectQuoteDomain,
};
