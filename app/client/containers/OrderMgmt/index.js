/**
 * OrderMgmt
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import UcListItem from '../../components/UcListItem';
import Pagination from '../../components/Pagination';
import UcNavTab from '../../components/UcNavTab';
import dict from '../../utils/dict.json';
import * as actions from './actions';

export class OrderMgmt extends PureComponent {
  componentDidMount() {
    const status = this.props.params.status;
    const query = this.props.location.query;
    const page = query.page ? query.page : 1;
    if (!this.props.orderListData) {
      this.props.getOrderList(status, page);
    }
  }

  render() {
    const ORDER_STATUS = get(dict, 'movie_order_status');

    console.log(ORDER_STATUS);

    const navLinks = [
      {
        link: '/uc/orderMgmt/1',
        text: '待付款',
      },
      {
        link: '/uc/orderMgmt/2',
        text: '已完成',
      },
      {
        link: '/uc/orderMgmt/3',
        text: '已失效',
      },
      {
        link: '/uc/orderMgmt/4',
        text: '全部',
      },
    ];

    return (
      <div className="order-mgmt-container">
        <Helmet
          title="订单管理"
          meta={[
            { name: 'description', content: 'Description of OrderMgmt' },
          ]}
        />
        <div className="order-mgmt-list">
          <UcNavTab links={navLinks} />
          {
            Array(10).fill().map((_, index) => {
              return <UcListItem type="order" key={`order-list-item-${index}`} />;
            })
          }
        </div>
        <Pagination className="order-mgmt-pagination" />
      </div>
    );
  }
}

OrderMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const orderMgmt = state.orderMgmt;
  const status = props.params.status;
  const query = props.location.query;
  const page = query.page ? query.page : 1;

  return {
    orderListData: orderMgmt.getIn(['orderListData', status, page]),
    orderListLoading: orderMgmt.getIn(['orderListLoading', status, page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getOrderList: (status, page) => dispatch(actions.getOrderList(status, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderMgmt);
