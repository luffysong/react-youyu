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
import { money_mul } from '../../utils/math';
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
          title="认购申请"
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
              <td><span className="color-orange">{ numComma(money_mul(this.props.orderInfoData.price, 0.05)) }元</span> = {numComma(this.props.orderInfoData.price)}元 * 5%</td>
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
                  同意：
                  <a className="link-a" href="/protocol/deposit" target="_blank">《保证金管理制度》</a>&nbsp;
                  <a className="link-a" href="/protocol/delist" target="_blank">《委托摘牌协议申请书》</a>&nbsp;
                  <a className="link-a" href="/protocol/risk" target="_blank">《风险揭示书》</a>
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
        <div className="accept-confirm-desc">
          <h3 className="accept-confirm-desc-title">保证金使用说明</h3>
          <div className="accept-confirm-desc-text">
            1、由于意向受让方自身原因，意向受让方自保证金到账之日起3个交易日内未与转让方签署《影视投资收益权转让协议》；<br/>
            2、签署《影视投资收益权转让协议》之日起3个交易日内，意向受让方未将剩余转让价款支付至本公司指定的银行账户。
          </div>
        </div>
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
