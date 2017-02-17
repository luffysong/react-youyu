/**
 * QuotingList
 */

/**
 * External dependencies
 */
import React from 'react';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../Button';
import { numComma } from '../../utils/utils';
import CountDown from '../CountDown';

function QuotingListLoading() {
  return (
    <div className="quoting-list-component">
      {
        Array(10).fill(0).map((item, index) =>
          <div className="quoting-list-item loading" key={`quoting-list-item-${index}`}>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value loading">达芬奇</div>
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

function QuotingList(props) {
  const { loading, data } = props;

  if (loading) {
    return QuotingListLoading();
  }

  return (
    <div className="quoting-list-component">
      {
        data.map((item, index) =>
          <div className="quoting-list-item" key={`quoting-list-item-${index}`}>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">{get(item, 'transferor')}</div>
              <div className="quoting-list-item-column-name">转让方</div>
            </div>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">{get(item, 'share') ? get(item, 'share') * 100 : 0}%</div>
              <div className="quoting-list-item-column-name">转让份额</div>
            </div>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">{numComma(get(item, 'price'), false, true)}</div>
              <div className="quoting-list-item-column-name">转让价格</div>
            </div>
            <div className="quoting-list-item-column">
              <div className="quoting-list-item-column-value">
                <CountDown remain={get(item, 'time_remain')} />
              </div>
              <div className="quoting-list-item-column-name">剩余时间</div>
            </div>
            <Button className="quoting-list-item-btn" to={`/accept/confirm/${get(item, 'id')}`}>认购</Button>
          </div>
        )
      }
    </div>
  );
}

QuotingList.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array,
  ]).isRequired,
};

QuotingList.defaultProps = {
  loading: true,
  data: false,
};

export default QuotingList;
