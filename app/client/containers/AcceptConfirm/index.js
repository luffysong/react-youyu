/**
 * AcceptConfirm
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import AcceptInfoBar from '../../components/AcceptInfoBar';
import * as actions from './actions';
import { get } from 'lodash';
import { numComma } from '../../utils/utils';
import Tracker from '../../components/Tracker';

export class AcceptConfirm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.orderInfo(this.props.params.id);
    this.props.userInfo();
  }

  submit() {
    //去除空格
    if (!this.refs.investReason.value.replace(/(^\s+)|(\s+$)/g,"")) {
      this.setState({
        reasonRequired: '认购陈述不能为空'
      });
      return;
    }
    this.props.placeOrder({
      listing_id: this.props.params.id,
      reason: this.refs.investReason.value,
    },(data) => this.props.router.push(`/accept/pay/${data.trade_deposit_id}`));
  }

  investDesc(event) {
    this.setState({
      reasonRequired: event.target.value.replace(/(^\s+)|(\s+$)/g,"") ? '' : '认购陈述不能为空'
    })
  }

  agree(event) {
    this.setState({
      agree: !this.state.agree
    });
  }

  render() {
    return (
      <div className="accept-confirm-container">
        <Helmet
          title="确认意向"
          meta={[
            { name: 'description', content: 'Description of AcceptConfirm' },
          ]}
        />
        <AcceptInfoBar data={this.props.orderInfoData} />
        <table className="accept-confirm-table">
          <tbody>
            <tr>
              <td className="left-column">受让方：</td>
              <td>{get(this.props.userInfoData, 'info.real_info.certificate_name')}</td>
            </tr>
            <tr>
              <td className="left-column">受让方证件号：</td>
              <td>{get(this.props.userInfoData, 'info.real_info.certificate_number')}</td>
            </tr>
            <tr>
              <td className="left-column">意向保证金：</td>
              <td><span className="color-orange">{ numComma(this.props.orderInfoData.price / 100) }元</span> = {numComma(this.props.orderInfoData.price)}元 * 1%</td>
            </tr>
            <tr>
              <td className="left-column">
                <span className="left-column-name-top">认购陈述：</span>
              </td>
              <td>
                <textarea name="confirm-reason" className={ this.state.reasonRequired ? 'error' : ''} rows="5" placeholder="例如：个人介绍、投资理由、为项目提供的资源等。" ref="investReason" onChange={this.investDesc.bind(this)}>
                </textarea>
                <div className="err-msg">
                  {
                    this.state.reasonRequired
                  }
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className={this.state.agree ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" name="memberType" onChange={this.agree.bind(this)} value="agree" id="agree" />
                </div>
                <label htmlFor="agree">
                  同意：<a href="/protocol/deposit" target="_blank">《保证金管理制度》</a>
                </label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className={`pay-deposit ${!this.state.agree ? 'disabled' : ''}`} onClick={this.submit.bind(this)}>
                  支付保证金
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/*<div className="accept-confirm-desc">
          <h3 className="accept-confirm-desc-title">保证金使用说明</h3>
          <div className="accept-confirm-desc-text">
            说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字
          </div>
        </div>*/}
      </div>
    );
  }
}

AcceptConfirm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const acceptConfirm = state.acceptConfirm;
  return {
    placeOrderLoading: acceptConfirm.get('placeOrderLoading'),
    placeOrderData: acceptConfirm.get('placeOrderData'),
    orderInfoLoading: acceptConfirm.get('orderInfoLoading'),
    orderInfoData: acceptConfirm.get('orderInfoData'),
    userInfoLoading: acceptConfirm.get('userInfoLoading'),
    userInfoData: acceptConfirm.get('userInfoData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    placeOrder: (params, callback) => dispatch(actions.placeOrder(params, callback)),
    orderInfo: (id) => dispatch(actions.orderInfo(id)),
    userInfo: () => dispatch(actions.userInfo()),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(AcceptConfirm));
