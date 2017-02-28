/**
 * OrderMgmt
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get, fill } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import UcListItem from '../../components/UcListItem';
import Pagination from '../../components/Pagination';
import UcNavTab from '../../components/UcNavTab';
import Empty from '../../components/Empty';
import * as actions from './actions';
import Tracker from '../../components/Tracker';

export class OrderMgmt extends PureComponent {
  constructor(props) {
    super(props);
    const status = this.props.params.status;
    this.state = {
      status,
      STATUS: {
        open: '待付款',
        succeed: '已完成',
        cancelled: '已失效',
        all: '全部',
      },
    };
    this.onPageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.query;
    const page = query.page || '1';
    this.props.getOrderList(this.state.status, page);
  }

  componentDidUpdate(prevProps) {
    const query = this.props.location.query;
    const page = query.page || '1';
    const prevQuery = prevProps.location.query;
    const prevPage = prevQuery.page;

    if (prevPage && (page !== prevPage)) {
      this.props.getOrderList(this.state.status, page);
    }
  }

  handlePageChange(page) {
    if (!page || page.selected === undefined) {
      return false;
    }
    this.props.router.push({
      pathname: `/uc/orderMgmt/${this.state.status}`,
      query: {
        page: '' + (page.selected + 1),
      }
    });
  }

  renderLoading() {
    return fill(Array(3), 0).map((_, index) => {
      return <UcListItem type="order" loading={true} key={`order-list-item-${index}`} />;
    });
  }

  renderList(data) {
    if (!data || !data.length) {
      return <Empty text="暂时还没有数据哦" />;
    }

    return data.map((item, index) => {
      return <UcListItem type="order" data={item} key={`order-list-item-${index}`} />;
    });
  }

  render() {
    const navLinks = [];
    const { orderListData, orderListLoading } = this.props;
    const pageInfo = {
      currentPage: get(orderListData, 'current_page'),
      lastPage: get(orderListData, 'last_page'),
    };
    const listData = get(orderListData, 'data');

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
        <Helmet title="订单管理" />
        <div className="order-mgmt-list">
          <UcNavTab links={navLinks} />
          {
            orderListLoading
            ? this.renderLoading()
            : this.renderList(listData)
          }
        </div>
        {
          (orderListLoading || (!orderListLoading && !(listData && listData.length)))
          ? null
          : <Pagination pageInfo={pageInfo} onPageChange={this.onPageChange} className="order-mgmt-pagination" />
        }
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
  const page = query.page || '1';

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

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(OrderMgmt));
