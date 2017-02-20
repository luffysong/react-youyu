/**
 * UcListItem
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../Button';
import { numComma } from '../../utils/utils';
import { movie_order_status, trade_status } from '../../utils/dict.json';

class UcListItem extends PureComponent {
  renderTop(data) {
    if (this.props.loading) {
      return <div className="uc-list-item-top loading">
      </div>;
    }

    return <div className="uc-list-item-top">
      {
        data && data.length ? data.map((item, index) => {
          return <div className="uc-list-item-top-item" key={`uc-list-item-top-item-${index}`}>
            {`${item.name}：${item.value}`}
          </div>;
        }) : null
      }
    </div>;
  }

  renderMiddle(type, data, id) {
    const classes = classnames([
      'uc-list-item-middle',
      'clearfix',
      {
        'no-border': type !== 'order',
        loading: this.props.loading,
      },
    ]);

    const tempData = [
      {
        name: '项目名称',
        value: '神奇动物在哪里',
      },
      {
        name: '制片方',
        value: '华纳影业',
      },
      {
        name: '转让方',
        value: '达芬奇',
      },
      {
        name: '份额',
        value: '1%',
      },
      {
        name: '转让价格',
        value: '100,000元',
      },
    ];

    if (this.props.loading) {
      return <div className={classes}>
        {
          tempData.map((item, index) => {
            return <div className={`uc-list-item-middle-item item-${index + 1}`} key={`uc-list-item-middle-item-${index}`}>
              <div className="uc-list-item-middle-item-value loading">
                {item.value}
              </div>
              <div className="uc-list-item-middle-item-name loading">
                {item.name}
              </div>
            </div>;
          })
        }
      </div>;
    }

    return <div className={classes}>
      {
        data && data.length ? data.map((item, index) => {
          return [
            <div className={`uc-list-item-middle-item item-${index + 1}`} key={`uc-list-item-middle-item-${index}`}>
              <div className="uc-list-item-middle-item-value">
                {item.value}
              </div>
              <div className="uc-list-item-middle-item-name">
                {item.name}
              </div>
            </div>,
          ];
        }) : null
      }
      { type !== 'order' ? <Button className="uc-list-item-button" to={`/quote/${type}/${id}`}>申请转让</Button> : null }
    </div>;
  }

  renderBottom(data) {
    const tempData = [
      {
        name: '支付保证金',
        value: '1,000元',
        status: '待付款',
      },
      {
        name: '支付尾款',
        value: '99,000元',
        status: '未开启',
      },
    ];

    if (this.props.loading) {
      return <div className="uc-list-item-bottom clearfix">
        <div className="uc-list-item-bottom-split"></div>
        <table>
          <tbody>
            {
              tempData.map((item, index) => {
                return <tr key={`uc-list-item-bottom-${index}`}>
                  <td>
                    <div className="item-sign"></div>
                  </td>
                  <td className="loading">{item.name}</td>
                  <td className="loading">{item.value}</td>
                  <td className="loading">{item.status}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>;
    }

    return <div className="uc-list-item-bottom clearfix">
      <div className="uc-list-item-bottom-split"></div>
      <table>
        <tbody>
          {
            data.map((item, index) => {
              return <tr key={`uc-list-item-bottom-${index}`}>
                <td>
                  <div className={`item-sign ${item.status === '已付款' ? 'active' : ''}`}></div>
                </td>
                <td>{item.name}</td>
                <td>{item.value}</td>
                <td>{item.status}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>;
  }

  render() {
    const { type, data, status } = this.props;
    let tpl, topData, middleData;

    switch(type) {
      case 'order':
        topData = [
          {
            name: '订单状态',
            value: movie_order_status[get(data, 'status')],
          },
          {
            name: '下单时间',
            value: get(data, 'created_at'),
          },
          {
            name: '订单号',
            value: get(data, 'id'),
          },
        ];

        middleData = [
          {
            name: '项目名称',
            value: get(data, 'movie.name'),
          },
          {
            name: '制片方',
            value: get(data, 'movie.producer'),
          },
          {
            name: '转让方',
            value: get(data, 'movie_listing.user.real_info.certificate_name'),
          },
          {
            name: '份额',
            value: get(data, 'share') * 100 + '%',
          },
          {
            name: '转让价格',
            value: numComma(get(data, 'amount'), false, true),
          },
        ];

        const bottomData = [
          {
            name: '支付保证金',
            value: numComma(get(data, 'trade_deposit.amount'), false, true),
            status: trade_status[get(data, 'trade_deposit.status')],
          },
          {
            name: '支付尾款',
            value: numComma(get(data, 'trade_balance.amount'), false, true),
            status: trade_status[get(data, 'trade_balance.status')],
          },
        ];

        tpl = <div>
          {this.renderTop(topData)}
          {this.renderMiddle(type, middleData, get(data, 'id'))}
          {this.renderBottom(bottomData)}
        </div>
        break;
      case 'initial':
        topData = [
          {
            name: '份额号',
            value: get(data, 'id'),
          },
          {
            name: '挂牌时间',
            value: get(data, 'listing_time'),
          },
        ];

        middleData = [
          {
            name: '项目名称',
            value: get(data, 'name'),
          },
          {
            name: '制片方',
            value: get(data, 'producer'),
          },
          {
            name: '转让份额',
            value: get(data, 'listing_quota') * 100 + '%',
          },
          {
            name: '转让价格',
            value: numComma(get(data, 'listing_price'), false, true),
          },
        ];

        tpl = <div>
          {this.renderTop(topData)}
          {this.renderMiddle(type, middleData, get(data, 'id'))}
        </div>;
        break;
      case 'rights':
        topData = [
          {
            name: '份额号',
            value: get(data, 'id'),
          },
          {
            name: '挂牌时间',
            value: get(data, 'listing_time'),
          },
        ];

        if (status === 'holding') {
          topData[1] = {
            name: '获得时间',
            value: get(data, 'gain_time'),
          };
          topData.push({
            name: '转让中',
            value: get(data, 'listing_quota') * 100 + '%',
          },
          {
            name: '审核中',
            value: get(data, 'audited_quota') * 100 + '%',
          });
        }

        middleData = [
          {
            name: '项目名称',
            value: get(data, 'name'),
          },
          {
            name: '制片方',
            value: get(data, 'producer'),
          },
          {
            name: '转让份额',
            value: get(data, 'listing_quota') * 100 + '%',
          },
          {
            name: '转让价格',
            value: numComma(get(data, 'listing_price'), false, true),
          },
        ];

        if (status === 'holding') {
          middleData.splice(2, 2, {
            name: '持有份额',
            value: get(data, 'current_quota') * 100 + '%',
          });
        }

        tpl = <div>
          {this.renderTop(topData)}
          {this.renderMiddle(type, middleData, get(data, 'id'))}
        </div>;
        break;
      default:
        tpl = null;
        break;
    }

    return (
      <div className="uc-list-item-component">
        {tpl}
      </div>
    );
  }
}

UcListItem.propTypes = {
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.object,
  loading: React.PropTypes.bool,
};

export default UcListItem;
