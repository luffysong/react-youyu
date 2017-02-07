/**
 * AcceptPay
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

/**
 * Internal dependencies
 */
import './style.less';
import makeSelectAcceptPay from './selectors';

export class AcceptPay extends PureComponent {
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
                  <td className="column-value">202,000元</td>
                </tr>
                <tr>
                  <td className="column-name">户名</td>
                  <td className="column-value">李思思</td>
                </tr>
                <tr>
                  <td className="column-name">账号</td>
                  <td className="column-value">8888 0808 0532 6809 666</td>
                </tr>
                <tr>
                  <td className="column-name">开户行</td>
                  <td className="column-value">北京招商银行万泉河支行</td>
                </tr>
                <tr>
                  <td className="column-name">在备注里注明</td>
                  <td className="column-value">神奇的动物在哪里保证金</td>
                </tr>
              </tbody>
              <img src={require('./imgs/pic_line_payment.svg')} alt="border" className="accept-pay-part-border"/>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

AcceptPay.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AcceptPay: makeSelectAcceptPay(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptPay);
