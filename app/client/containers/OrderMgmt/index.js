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
    const query = this.props.location.query;
    const status = this.props.params.status;
    this.state = {
      page: query.page ? parseInt(query.page, 10) : 1,
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
    this.props.getOrderList(this.state.status, this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    const page = this.state.page;
    const oldPage = prevState.page;

    if (page !== oldPage) {
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
        page: parseInt(page.selected + 1, 10),
      }
    });
  }

  renderLoading() {
    return Array(3).fill().map((_, index) => {
      return <UcListItem type="order" loading={true} key={`order-list-item-${index}`} />;
    });
  }

  renderList(data) {
    if (!data || !data.length) {
      return null;
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
            : this.renderList(get(orderListData, 'data'))
          }
        </div>
        {
          orderListLoading
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
  const page = query.page ? parseInt(query.page, 10) : 1;

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
