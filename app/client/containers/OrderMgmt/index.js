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
import * as actions from './actions';

export class OrderMgmt extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      STATUS: {
        open: '待付款',
        succeed: '已完成',
        cancelled: '已失效',
        all: '全部',
      },
    };
  }

  componentDidMount() {
    const status = this.props.params.status;
    const query = this.props.location.query;
    const page = query.page ? query.page : 1;
    if (!this.props.orderListData) {
      this.props.getOrderList(status, page);
    }
  }

  render() {
    const navLinks = [];

    for (let item in this.state.STATUS) {
      if (this.state.STATUS.hasOwnProperty(item)) {
        navLinks.push({
          link: `/uc/orderMgmt/${item}`,
          text: this.state.STATUS[item],
        });
      }
    }

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
