/**
 * PayFlowBar
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import './style.less';

function PayFlowBar() {
  return (
    <div className="pay-flow-bar-component">
      <div className="pay-flow-bar-inner">
        <div className="pay-flow-bar-title">
          认购流程：
        </div>
        <div className="pay-flow-bar-progress progress-1">
          <img src={require('./imgs/icon_safe_progress.svg')} alt="支付保证金" />
          <div className="pay-flow-bar-progress-wrapper">
            <div className="pay-flow-bar-progress-name">
              支付保证金
            </div>
            <div className="pay-flow-bar-progress-desc">
              转让价格的 5%
            </div>
          </div>
        </div>
        <img className="pay-flow-bar-progress-arrow" src={require('./imgs/icon_arrow_progress.svg')} alt="" />
        <div className="pay-flow-bar-progress progress-2">
          <img src={require('./imgs/icon_confirm_progress.svg')} alt="转让方确定认购意向" />
          <div className="pay-flow-bar-progress-wrapper">
            <div className="pay-flow-bar-progress-name">
              转让方确定认购意向
            </div>
            <div className="pay-flow-bar-progress-desc">
              与转让方洽谈达成一致
            </div>
          </div>
        </div>
        <img className="pay-flow-bar-progress-arrow" src={require('./imgs/icon_arrow_progress.svg')} alt="" />
        <div className="pay-flow-bar-progress progress-3">
          <img src={require('./imgs/icon_card_progress.svg')} alt="支付尾款" />
          <div className="pay-flow-bar-progress-wrapper">
            <div className="pay-flow-bar-progress-name">
              支付尾款
            </div>
            <div className="pay-flow-bar-progress-desc">
              快捷的权限变更
            </div>
          </div>
        </div>
        <div className="pay-flow-bar-contact">
          <div className="pay-flow-bar-contact-phone">
            010-59974027
          </div>
          <div className="pay-flow-bar-contact-desc">
            客服电话
          </div>
        </div>
      </div>
    </div>
  );
}

PayFlowBar.propTypes = {

};

export default PayFlowBar;
