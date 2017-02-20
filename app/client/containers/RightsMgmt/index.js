/**
 * RightsMgmt
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
import UcNavTab from '../../components/UcNavTab';
import UcListItem from '../../components/UcListItem';
import Pagination from '../../components/Pagination';
import Empty from '../../components/Empty';
import * as actions from './actions';

export class RightsMgmt extends PureComponent {
  constructor(props) {
    super(props);
    const status = this.props.params.status;
    this.state = {
      status,
      STATUS: {
        holding: '持有中',
        listing: '转让中',
        finished: '已转让',
      },
    };
    this.onPageChange = this.handlePageChange.bind(this);
    this.cancel = id => this.handleCancel.bind(this, id);
  }

  componentDidMount() {
    const query = this.props.location.query;
    const page = query.page || '1';
    this.props.getRightsList(this.state.status, page);
  }

  componentDidUpdate(prevProps) {
    const query = this.props.location.query;
    const page = query.page || '1';
    const prevQuery = prevProps.location.query;
    const prevPage = prevQuery.page;

    if (prevPage && (page !== prevPage)) {
      this.props.getRightsList(this.state.status, page);
    }
  }

  handlePageChange(page) {
    if (!page || page.selected === undefined) {
      return false;
    }
    this.props.router.push({
      pathname: `/uc/rightsMgmt/${this.state.status}`,
      query: {
        page: '' + (page.selected + 1),
      }
    });
  }

  handleCancel(id) {
    this.props.cancelTransfer(id);
  }

  renderLoading() {
    return Array(3).fill().map((_, index) => {
      return <UcListItem type="rights" loading={true} key={`rights-list-item-${index}`} />;
    });
  }

  renderList(data) {
    if (!data || !data.length) {
      return <Empty text="暂时还没有数据哦" />;
    }

    return data.map((item, index) => {
      return <UcListItem type="rights" status={this.state.status} data={item} cancel={this.cancel} key={`rights-list-item-${index}`} />;
    });
  }

  render() {
    const navLinks = [];
    const { rightsListData, rightsListLoading } = this.props;
    const pageInfo = {
      currentPage: get(rightsListData, 'current_page'),
      lastPage: get(rightsListData, 'last_page'),
    };
    const listData = get(rightsListData, 'data');

    for (let item in this.state.STATUS) {
      if (this.state.STATUS.hasOwnProperty(item)) {
        navLinks.push({
          link: `/uc/rightsMgmt/${item}`,
          text: this.state.STATUS[item],
        });
      }
    }

    return (
      <div className="rights-mgmt-container">
        <Helmet title="影视收益权管理" />
        <div className="rights-mgmt-list">
          <UcNavTab links={navLinks} />
          {
            rightsListLoading
            ? this.renderLoading()
            : this.renderList(listData)
          }
        </div>
        {
          (rightsListLoading || (!rightsListLoading && !(listData && listData.length)))
          ? null
          : <Pagination pageInfo={pageInfo} onPageChange={this.onPageChange} className="rights-mgmt-pagination" />
        }
      </div>
    );
  }
}

RightsMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapStateToProps(state, props) {
  const rightsMgmt = state.rightsMgmt;
  const status = props.params.status;
  const query = props.location.query;
  const page = query.page || '1';

  return {
    rightsListData: rightsMgmt.getIn(['rightsListData', status, page]),
    rightsListLoading: rightsMgmt.getIn(['rightsListLoading', status, page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getRightsList: (status, page) => dispatch(actions.getRightsList(status, page)),
    cancelTransfer: (id) => dispatch(actions.cancelTransfer(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightsMgmt);
