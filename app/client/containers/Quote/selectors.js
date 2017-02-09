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

const makeSelectQuoteLoading = () => createSelector(
  selectQuoteDomain(),
  (substate) => substate.get('quoteLoading')
);

const makeSelectQuoteData = () => createSelector(
  selectQuoteDomain(),
  (substate) => substate.get('quoteData')
);

const makeSelectQuoteError = () => createSelector(
  selectQuoteDomain(),
  (substate) => substate.get('quoteError')
);

export {
  makeSelectQuote,
  makeSelectQuoteLoading,
  makeSelectQuoteData,
  makeSelectQuoteError,
};
