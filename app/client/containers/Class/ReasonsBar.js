/**
 * QABar Component
 */

/**
 * External dependencies
 */
import React from 'react';

function ReasonsBar() {
  return (
    <div className="reasons-bar-component">
      <ul className="reasons-bar">
        <li className="reasons-bar-item">
          <img className="reasons-bar-item-icon" src={require('./imgs/icon_market_why_new.svg')} alt="市场前景好"/>
          <div className="reasons-bar-item-title">市场前景好</div>
          <div className="reasons-bar-item-desc">预计2018年，中国将超越美国成为世界第一大电影市场。</div>
        </li>
        <li className="reasons-bar-item">
          <img className="reasons-bar-item-icon" src={require('./imgs/icon_money_why_new.svg')} alt="回款周期短"/>
          <div className="reasons-bar-item-title">回款周期短</div>
          <div className="reasons-bar-item-desc">影视票房收入的回款周期短，变现能力强，可以在短时间内获取价差。</div>
        </li>
        <li className="reasons-bar-item">
          <img className="reasons-bar-item-icon" src={require('./imgs/icon_imagenation_why_new.svg')} alt="收益具有想象力"/>
          <div className="reasons-bar-item-title">收益具有想象力</div>
          <div className="reasons-bar-item-desc">影视投资具有较高的行业壁垒和投资风险，同时也具有较高的投资回报。</div>
        </li>
        <li className="reasons-bar-item">
          <img className="reasons-bar-item-icon" src={require('./imgs/icon_extra_why_new.svg')} alt="影视附加值丰富"/>
          <div className="reasons-bar-item-title">影视附加值丰富</div>
          <div className="reasons-bar-item-desc">投资影视可以获得参与影视制作、发行全程的机会，感受全新的投资体验。</div>
        </li>
      </ul>
    </div>
  );
}

ReasonsBar.propTypes = {

};

export default ReasonsBar;
