/**
 * RightsMgmt actions
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import * as types from './constants';
import { get, post } from '../../utils/request';
import message from '../../components/Message';

export function getRightsList(status, page) {
  return dispatch => {
    dispatch({
      type: types.GET_RIGHTS_LIST,
      status,
      page,
    });
    get(`/movie/rights-quote/list/${status}`, {
      page,
      per_page: 10,
    }).then(data => {
      dispatch(getRightsListSuc(status, page, data));
    }, err => {
      dispatch(getRightsListErr(status, page, err));
    });
  }
}

export function getRightsListSuc(status, page, data) {
  return {
    type: types.GET_RIGHTS_LIST_SUC,
    status,
    page,
    data,
  };
}

export function getRightsListErr(status, page, err) {
  return {
    type: types.GET_RIGHTS_LIST_ERR,
    status,
    page,
    err,
  };
}

export function cancelTransfer(id) {
  return dispatch => {
    dispatch({
      type: types.CANCEL_TRANSFER,
      id,
    });
    post('/movie/rights-quote/cancel-listing-apply', {
      id,
    }).then(data => {
      dispatch(cancelTransferSuc(id, data));
    }, err => {
      dispatch(cancelTransferErr(id, err));
    });
  }
}

export function cancelTransferSuc(id, data) {
  message.success('撤销成功');
  return {
    type: types.CANCEL_TRANSFER_SUC,
    id,
    data,
  }
}

export function cancelTransferErr(id, err) {
  return {
    type: types.CANCEL_TRANSFER_ERR,
    id,
    err,
  }
}
