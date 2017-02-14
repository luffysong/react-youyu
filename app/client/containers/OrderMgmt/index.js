/**
 * OrderMgmt
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import UcListItem from '../../components/UcListItem';
import Pagination from '../../components/Pagination';
import UcNavTab from '../../components/UcNavTab';
import dict from '../../utils/dict.json';

export class OrderMgmt extends PureComponent {
  render() {
    console.log(dict.movie_order_status);
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

function mapStateToProps(state) {
  const orderMgmt = state.orderMgmt;

  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderMgmt);
