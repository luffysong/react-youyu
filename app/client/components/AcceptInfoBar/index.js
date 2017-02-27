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
import { get } from 'lodash';
import { acceptFormatDate, numComma } from '../../utils/utils';
import { toPercent } from '../../utils/math';

function AcceptInfoBar(props) {
  return (
    <div className="accept-info-bar-component">
      <h2 className="accept-info-bar-title">
        {get(props,'data.name')}
      </h2>
      {
        get(props,'data.transferee_deadline') ?
          <div className="accept-info-bar-tip">
            重要提示：该收益权设置有禁售期，在{acceptFormatDate(get(props,'data.transferee_deadline'))}前不能转让此收益权。
          </div> : null
      }
      <ul className="accept-info-bar-info">
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            {get(props,'data.producer')}
          </div>
          <div className="accept-info-bar-info-item-name">
            制片方
          </div>
        </li>
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            {get(props,'data.transferor')}
          </div>
          <div className="accept-info-bar-info-item-name">
            转让方
          </div>
        </li>
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            {toPercent(get(props,'data.share'))}
          </div>
          <div className="accept-info-bar-info-item-name">
            转让份额
          </div>
        </li>
        <li className="accept-info-bar-info-item">
          <div className="accept-info-bar-info-item-value">
            {numComma(get(props,'data.price'))}元
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
