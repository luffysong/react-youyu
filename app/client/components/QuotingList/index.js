/**
 * QuotingList
 */

/**
 * External dependencies
 */
import React from 'react';
import { get } from 'lodash';
import ReactTooltip from 'react-tooltip';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../Button';
import { numComma } from '../../utils/utils';
import { toPercent } from '../../utils/math';
import CountDown from '../CountDown';
import Empty from '../Empty';

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

function renderEmpty() {
  return <Empty className="project-quoting-list-empty" text="暂时没有数据哦" />;
}

function QuotingList(props) {
  const { loading, data } = props;

  if (loading) {
    return QuotingListLoading();
  }

  if (!(data && data.length)) {
    return renderEmpty();
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
              <div className="quoting-list-item-column-value">{get(item, 'share') ? toPercent(get(item, 'share')) : '0%'}</div>
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
            {
              get(item, 'assigned_to_other')
              ? <div data-tip data-for="quote-list-tooltip"><Button bordered={true} className="quoting-list-item-btn-bordered">指定受让方</Button></div>
              : <Button className="quoting-list-item-btn" to={`/accept/confirm/${get(item, 'id')}`}>认购</Button>
            }
            <ReactTooltip class='quote-list-tooltip' id='quote-list-tooltip' type='light' place="right" effect="solid">
              <span>非指定受让方不能认购</span>
            </ReactTooltip>
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
