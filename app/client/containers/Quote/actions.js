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

/*初始份额转让申请*/
export function initialQuote(params, callback) {
  return (dispatch) => {
    dispatch({
      type: types.INITIAL_QUOTE,
    });
    return post('/movie/initial-quote/listing-apply', params).then((data) => {
      dispatch(initialQuoteSuc(data));
      callback();
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

/*获取初始份额转让信息*/
export function initialInfo(id) {
  return (dispatch) => {
    dispatch({
      type: types.INITIAL_INFO,
    });
    return get(`/movie/initial-quote/detail/${id}`).then((data) => {
      console.log(data);
      dispatch(initialInfoSuc(data));
    }).catch(err => {
      dispatch(initialInfoErr(err));
    });
  };
}

export function initialInfoSuc(data) {
  return {
    type: types.INITIAL_INFO_SUC,
    data,
  };
}

export function initialInfoErr(error) {
  return {
    type: types.INITIAL_INFO_ERR,
    error,
  };
}


export function rightsQuote(params) {
  return (dispatch) => {
    dispatch({
      type: types.RIGHTS_QUOTE,
    });
    return post('/movie/rights-quote/listing-apply', params).then((data) => {
      dispatch(rightsQuoteSuc(data));
    });
  };
}

export function rightsQuoteSuc(data) {
  return {
    type: types.RIGHTS_QUOTE_SUC,
    data,
  };
}

export function rightsQuoteErr(error) {
  return {
    type: types.RIGHTS_QUOTE_ERR,
    error,
  };
}

export function rightsInfo(id) {
  return (dispatch) => {
    dispatch({
      type: types.RIGHTS_INFO,
    });
    return get(`/movie/rights-quote/detail/${id}`).then((data) => {
      dispatch(rightsInfoSuc(data));
    });
  };
}

export function rightsInfoSuc(data) {
  return {
    type: types.RIGHTS_INFO_SUC,
    data,
  };
}

export function rightsInfoErr(error) {
  return {
    type: types.RIGHTS_INFO_ERR,
    error,
  };
}
