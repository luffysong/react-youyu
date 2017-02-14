/**
 * AcceptPay actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies`
 */
import * as types from './constants';
import { get } from '../../utils/request';


/*获取汇款账户信息*/
export function tradeInfo(id) {
  return (dispatch) => {
    dispatch({
      type: types.TRADE_INFO,
    });
    return get(`/movie/trade/${id}`).then((data) => {
      dispatch(tradeInfoSuc(data));
    });
  };
}

export function tradeInfoSuc(data) {
  return {
    type: types.TRADE_INFO_SUC,
    data,
  };
}

export function tradeInfoErr(error) {
  return {
    type: types.TRADE_INFO_ERR,
    error,
  };
}
