/**
 * Transfer
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import * as actions from './../AcceptPay/actions';
import Tracker from '../../components/Tracker';

export class Transfer extends PureComponent {
  constructor(props) {
    super(props);
    this.props.tradeInfo(this.props.params.id);
  }

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
                  <td className="transfer-info-right">{get(this.props.tradeInfoData, 'amount')}元</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">户名</td>
                  <td className="transfer-info-right">{get(this.props.tradeInfoData, 'remittance_info.account_name')}</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">账号</td>
                  <td className="transfer-info-right">{get(this.props.tradeInfoData, 'remittance_account')}</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">开户行</td>
                  <td className="transfer-info-right">{get(this.props.tradeInfoData, 'remittance_info.bank')}</td>
                </tr>
                <tr>
                  <td className="transfer-info-left">在备注里注明</td>
                  <td className="transfer-info-right">{get(this.props.tradeInfoData, 'remittance_info.remark')}</td>
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

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(Transfer));
