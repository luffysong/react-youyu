/**
 * Quote actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get, post} from '../../utils/request';

export function initialQuote(params) {
  return (dispatch) => {
    dispatch({
      type: types.INITIAL_QUOTE,
    });
    return post('/movie/initial-quote/listing-apply', params).then((data) => {
      dispatch(initialQuoteSuc(data));
    });
  };
}

export function initialQuoteSuc(data) {
  return {
    type: types.INITIAL_QUOTE_SUC,
    data,
  };
}

export function initialQuoteErr(error) {
  return {
    type: types.INITIAL_QUOTE_ERR,
    error,
  };
}

