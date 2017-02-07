/**
 * AcceptConfirm
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
import makeSelectAcceptConfirm from './selectors';
import AcceptInfoBar from '../../components/AcceptInfoBar';
import Button from '../../components/Button';

export class AcceptConfirm extends PureComponent {
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
              <td>李思思</td>
            </tr>
            <tr>
              <td className="left-column">受让方ID：</td>
              <td>1230000000123123</td>
            </tr>
            <tr>
              <td className="left-column">意向保证金：</td>
              <td><span className="color-orange">15,000元</span> = 1,500,000元 * 1%</td>
            </tr>
            <tr>
              <td className="left-column">
                <span className="left-column-name-top">认购陈述：</span>
              </td>
              <td>
                <textarea name="confirm-reason" rows="5" placeholder="例如：个人介绍、投资理由、为项目提供的资源等。">
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
                <Button className="accept-confirm-button" to="/accept/pay">
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

const mapStateToProps = createStructuredSelector({
  AcceptConfirm: makeSelectAcceptConfirm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptConfirm);
