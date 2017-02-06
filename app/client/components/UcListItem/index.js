/**
 * UcListItem
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../Button';

class UcListItem extends PureComponent {
  renderTop(data) {
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

  renderMiddle(type, data) {
    const classes = classnames([
      'uc-list-item-middle',
      'clearfix',
      {
        'no-border': type !== 'order'
      },
    ]);

    return <div className={classes}>
      {
        data && data.length ? data.map((item, index) => {
          return <div className={`uc-list-item-middle-item item-${index + 1}`} key={`uc-list-item-middle-item-${index}`}>
            <div className="uc-list-item-middle-item-value">
              {item.value}
            </div>
            <div className="uc-list-item-middle-item-name">
              {item.name}
            </div>
          </div>;
        }) : null
      }
      {type !== 'order' ? <Button className="uc-list-item-button">申请转让</Button> : null}
    </div>;
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
    const { type } = this.props;
    let tpl, topData, middleData;

    switch(type) {
      case 'order':
        topData = [
          {
            name: '订单状态',
            value: '待付保证金',
          },
          {
            name: '下单时间',
            value: '2016-10-11 16:55:50',
          },
          {
            name: '订单号',
            value: '2962894',
          },
        ];

        middleData = [
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

        tpl = <div>
          {this.renderTop(topData)}
          {this.renderMiddle(type, middleData)}
          {this.renderBottom()}
        </div>
        break;
      case 'initial':
        topData = [
          {
            name: '份额号',
            value: '0000001',
          },
          {
            name: '挂牌时间',
            value: '2016-10-11 16:55:50',
          },
        ];

        middleData = [
          {
            name: '项目名称',
            value: '神奇动物在哪里',
          },
          {
            name: '制片方',
            value: '华纳影业',
          },
          {
            name: '转让份额',
            value: '1%',
          },
          {
            name: '转让价格',
            value: '1,000,000,000元',
          },
        ];

        tpl = <div>
          {this.renderTop(topData)}
          {this.renderMiddle(type, middleData)}
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
};

export default UcListItem;
