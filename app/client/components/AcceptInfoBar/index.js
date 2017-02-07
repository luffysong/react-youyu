/**
 * AcceptInfoBar
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import './style.less';

function AcceptInfoBar() {
  return (
    <div className="accept-info-bar-component">
      <h2 className="accept-info-bar-title">神奇动物在哪里</h2>
      <div className="accept-info-bar-tip">
        重要提示：该收益权设置有禁售期，在2017年3月15日前不能转让此收益权。
      </div>
      <ul className="accept-info-bar-info">
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            华纳
          </div>
          <div className="accept-info-bar-info-item-name">
            制片方
          </div>
        </li>
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            张晓波
          </div>
          <div className="accept-info-bar-info-item-name">
            转让方
          </div>
        </li>
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            1.5%
          </div>
          <div className="accept-info-bar-info-item-name">
            转让份额
          </div>
        </li>
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            1,500,000元
          </div>
          <div className="accept-info-bar-info-item-name">
            转让价格
          </div>
        </li>
      </ul>
      <img className="accept-info-bar-pic" src={require('./imgs/pic_buy_confirm.svg')} alt="转让信息" />
    </div>
  );
}

AcceptInfoBar.propTypes = {

};

export default AcceptInfoBar;
