/**
 * InitialMgmt actions
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

export function getInitialList(status, page) {
  return dispatch => {
    dispatch({
      type: types.GET_INITIAL_LIST,
      status,
      page,
    });
    get(`/movie/initial-quote/list/${status}`, {
      page,
      per_page: 10,
    }).then(data => {
      dispatch(getInitialListSuc(status, page, data));
    }, err => {
      dispatch(getInitialListErr(status, page, err));
    });
  }
}

export function getInitialListSuc(status, page, data) {
  return {
    type: types.GET_INITIAL_LIST_SUC,
    status,
    page,
    data,
  };
}

export function getInitialListErr(status, page, err) {
  return {
    type: types.GET_INITIAL_LIST_ERR,
    status,
    page,
    err,
  };
}

export function cancelTransfer(id, sucCallback) {
  return dispatch => {
    dispatch({
      type: types.CANCEL_TRANSFER,
      id,
    });
    post('/movie/rights-quote/cancel-listing-apply', {
      id,
    }).then(data => {
      dispatch(cancelTransferSuc(id, data, sucCallback));
    }, err => {
      dispatch(cancelTransferErr(id, err));
    });
  }
}

export function cancelTransferSuc(id, data, sucCallback) {
  message.success('撤销成功');
  sucCallback && sucCallback();
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
