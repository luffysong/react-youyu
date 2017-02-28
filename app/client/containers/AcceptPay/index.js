/**
 * AcceptPay
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import * as actions from './actions';
import Tracker from '../../components/Tracker';

export class AcceptPay extends PureComponent {
  constructor(props) {
    super(props);
    this.props.tradeInfo(this.props.params.id);
  }
  render() {
    return (
      <div className="accept-pay-container">
        <Helmet
          title="支付保证金"
          meta={[
            { name: 'description', content: 'Description of AcceptPay' },
          ]}
        />
        <div className="container">
          <div className="accept-pay-part accept-pay-top">
            <img src={require('./imgs/icon_buy_payment.svg')} alt="支付保证金"/>
            <h2>支付保证金</h2>
            <p>
              请尽快汇款到交易所银行账户，收到您的汇款后，我们会在3个工作日确认您的款项。
            </p>
            <img src={require('./imgs/pic_line_payment.svg')} alt="border" className="accept-pay-part-border"/>
          </div>
          <div className="accept-pay-part accept-pay-bottom">
            <table>
              <tbody>
                <tr>
                  <td className="column-name">应付总额</td>
                  <td className="column-value">{get(this.props.tradeInfoData, 'amount')}元</td>
                </tr>
                <tr>
                  <td className="column-name">户名</td>
                  <td className="column-value">{get(this.props.tradeInfoData, 'remittance_info.account_name')}</td>
                </tr>
                <tr>
                  <td className="column-name">账号</td>
                  <td className="column-value">{get(this.props.tradeInfoData, 'remittance_account')}</td>
                </tr>
                <tr>
                  <td className="column-name">开户行</td>
                  <td className="column-value">{get(this.props.tradeInfoData, 'remittance_info.bank')}</td>
                </tr>
                <tr>
                  <td className="column-name">在备注里注明</td>
                  <td className="column-value">{get(this.props.tradeInfoData, 'remittance_info.remark')}</td>
                </tr>
              </tbody>
            </table>
            <Link to={`/uc/orderMgmt/open`} activeClassName="active" className="order-btn">查看订单</Link>
            <img src={require('./imgs/pic_line_payment.svg')} alt="border" className="accept-pay-part-border"/>
          </div>
        </div>
      </div>
    );
  }
}

AcceptPay.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const acceptPay = state.acceptPay;
  return {
    tradeInfoLoading: acceptPay.get('tradeInfoLoading'),
    tradeInfoData: acceptPay.get('tradeInfoData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    tradeInfo: (id) => dispatch(actions.tradeInfo(id)),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(AcceptPay));
