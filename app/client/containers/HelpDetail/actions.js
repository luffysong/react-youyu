/**
 * HelpDetail actions
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

const showSuccess = function (msg) {
  message.success(msg);
};

export function loadNewsDetail(id) {
  return dispatch => {
    dispatch({
      type: types.LOAD_NEWS_DETAIL,
      id,
    });
    get(`/news/${id}`).then(data => {
      dispatch(loadNewsDetailSuc(id, data.info));
    }).catch(err => {
      dispatch(loadNewsDetailErr(id, err));
    });
  }
}

export function loadNewsDetailSuc(id, data) {
  return {
    type: types.LOAD_NEWS_DETAIL_SUC,
    id,
    data,
  };
}

export function loadNewsDetailErr(id, err) {
  return {
    type: types.LOAD_NEWS_DETAIL_ERR,
    id,
    err,
  };
}

export function sendSolve(id, type) {
  return dispatch => {
    dispatch({
      type: types.SEND_SOLVE,
      id,
      str: type,
    });
    post(`/news/${id}/like`, {
      id,
      type,
    }).then(data => {
      showSuccess('感谢您的反馈~');
      dispatch(sendSolveSuc(id, data));
    }).catch(err => {
      dispatch(sendSolveErr(id, err));
    });
  }
}

export function sendSolveSuc(id, data) {
  return {
    type: types.SEND_SOLVE_SUC,
    id,
    data,
  }
}

export function sendSolveErr(id, err) {
  return {
    type: types.SEND_SOLVE_ERR,
    id,
    err,
  }
}


