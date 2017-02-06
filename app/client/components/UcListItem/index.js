/**
 * UcListItem
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';

/**
 * Internal dependencies
 */
import './style.less';

class UcListItem extends PureComponent {
  renderTop() {
    return <div className="uc-list-item-top">
      <div className="uc-list-item-top-item">
        订单状态：待付保证金
      </div>
      <div className="uc-list-item-top-item">
        下单时间：2016-10-11 16:55:50
      </div>
      <div className="uc-list-item-top-item">
        订单号：2962894
      </div>
    </div>;
  }

  renderMiddle() {
    return <div className="uc-list-item-middle clearfix">
      <div className="uc-list-item-middle-item item-1">
        <div className="uc-list-item-middle-item-value">
          神奇动物在哪里神奇动物在哪里
        </div>
        <div className="uc-list-item-middle-item-name">
          项目名称
        </div>
      </div>
      <div className="uc-list-item-middle-item item-2">
        <div className="uc-list-item-middle-item-value">
          华纳影业华纳影业华纳影业华纳影业
        </div>
        <div className="uc-list-item-middle-item-name">
          制片方
        </div>
      </div>
      <div className="uc-list-item-middle-item item-3">
        <div className="uc-list-item-middle-item-value">
          达芬奇
        </div>
        <div className="uc-list-item-middle-item-name">
          转让方
        </div>
      </div>
      <div className="uc-list-item-middle-item item-4">
        <div className="uc-list-item-middle-item-value">
          1%
        </div>
        <div className="uc-list-item-middle-item-name">
          份额
        </div>
      </div>
      <div className="uc-list-item-middle-item item-5">
        <div className="uc-list-item-middle-item-value">
          100,000元
        </div>
        <div className="uc-list-item-middle-item-name">
          转让价格
        </div>
      </div>
    </div>
  }

  renderBottom() {
    return <div className="uc-list-item-bottom clearfix">
      <div className="uc-list-item-bottom-split"></div>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="item-sign active"></div>
            </td>
            <td>支付保证金</td>
            <td>1,000元</td>
            <td>待付款</td>
          </tr>
          <tr>
            <td>
              <div className="item-sign"></div>
            </td>
            <td>支付尾款</td>
            <td>99,000元</td>
            <td>未开启</td>
          </tr>
        </tbody>
      </table>
    </div>;
  }

  render() {
    return (
      <div className="uc-list-item-component">
        {this.renderTop()}
        {this.renderMiddle()}
        {this.renderBottom()}
      </div>
    );
  }
}

UcListItem.propTypes = {

};

export default UcListItem;
