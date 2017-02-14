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
import Button from '../../components/Button';
import * as actions from './actions';
import { get } from 'lodash';

export class AcceptConfirm extends PureComponent {
  constructor(props) {
    super(props);
    this.props.orderInfo(this.props.params.id);
    this.props.userInfo();
  }
  //
  submit() {
    this.props.placeOrder({
      movie_id: '',
      listing_id: '',
      reason: this.refs.investReason.value,
    },() => this.props.router.push(`/accept/pay/${this.props.params.id}`));
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
        <AcceptInfoBar />
        <table className="accept-confirm-table">
          <tbody>
            <tr>
              <td className="left-column">受让方：</td>
              <td>{get(this.props.userInfoData, 'info.base.name')}</td>
            </tr>
            <tr>
              <td className="left-column">受让方ID：</td>
              <td>{get(this.props.userInfoData, 'info.id')}</td>
            </tr>
            <tr>
              <td className="left-column">意向保证金：</td>
              <td><span className="color-orange">15,000元</span> = 1,500,000元 * 5%</td>
            </tr>
            <tr>
              <td className="left-column">
                <span className="left-column-name-top">认购陈述：</span>
              </td>
              <td>
                <textarea name="confirm-reason" rows="5" placeholder="例如：个人介绍、投资理由、为项目提供的资源等。" ref="investReason">
                </textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" id="agreement-checkbox" />
                <label htmlFor="agreement-checkbox">
                  同意：<span className="color-orange">《XXXXXXXX协议》</span>
                </label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Button className="accept-confirm-button" onClick={this.submit.bind(this)}>
                  支付保证金
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="accept-confirm-desc">
          <h3 className="accept-confirm-desc-title">保证金使用说明</h3>
          <div className="accept-confirm-desc-text">
            说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字
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

export default connect(mapStateToProps, mapDispatchToProps)(AcceptConfirm);
