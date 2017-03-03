/**
 * Transfer
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

export class Transfer extends PureComponent {
  render() {
    return (
      <div className="transfer-container">
        <Helmet title="汇款信息" />
        <div className="transfer-wrapper container">
          <h1 className="transfer-title">汇款信息</h1>
          <div className="transfer-info">
            <table>
              <tbody>
                <tr>
                  <td className="transfer-info-left">应付总额</td>
                  <td className="transfer-info-right">202000元</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">户名</td>
                  <td className="transfer-info-right">李思思</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">账号</td>
                  <td className="transfer-info-right">8888 0808 0532 6809 666</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">开户行</td>
                  <td className="transfer-info-right">北京招商银行万泉河支行</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">在备注里注明</td>
                  <td className="transfer-info-right">神奇的动物在哪里保证金</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Transfer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
