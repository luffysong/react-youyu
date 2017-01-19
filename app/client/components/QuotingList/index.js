/**
 * QuotingList
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../Button';

function QuotingList() {
  return (
    <div className="quoting-list-component">
      {
        Array(10).fill(0).map((item, index) =>
          <div className="quoting-list-item" key={`quoting-list-item-${index}`}>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">达芬奇</div>
              <div className="quoting-list-item-column-name">转让方</div>
            </div>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">1%</div>
              <div className="quoting-list-item-column-name">转让份额</div>
            </div>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">100,000元</div>
              <div className="quoting-list-item-column-name">转让价格</div>
            </div>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">3天</div>
              <div className="quoting-list-item-column-name">剩余时间</div>
            </div>
            <Button className="quoting-list-item-btn">认购</Button>
          </div>
        )
      }
    </div>
  );
}

QuotingList.propTypes = {

};

export default QuotingList;
