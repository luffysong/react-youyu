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
import * as actions from './actions';

export class RightsMgmt extends PureComponent {
  constructor(props) {
    super(props);
    const query = this.props.location.query;
    const status = this.props.params.status;
    this.state = {
      page: query.page ? parseInt(query.page, 10) : 1,
      status,
      STATUS: {
        holding: '持有中',
        listing: '转让中',
        finished: '已转让',
      },
    };
    this.onPageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.props.getRightsList(this.state.status, this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    const page = this.state.page;
    const oldPage = prevState.page;

    if (page !== oldPage) {
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
        page: parseInt(page.selected + 1, 10),
      }
    });
  }

  renderLoading() {
    return Array(3).fill().map((_, index) => {
      return <UcListItem type="rights" loading={true} key={`rights-list-item-${index}`} />;
    });
  }

  renderList(data) {
    if (!data || !data.length) {
      return null;
    }

    return data.map((item, index) => {
      return <UcListItem type="rights" data={item} key={`rights-list-item-${index}`} />;
    });
  }

  render() {
    const navLinks = [];
    const { rightsListData, rightsListLoading } = this.props;
    const pageInfo = {
      currentPage: get(rightsListData, 'current_page'),
      lastPage: get(rightsListData, 'last_page'),
    };

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
            : this.renderList(get(rightsListData, 'data'))
          }
        </div>
        {
          rightsListLoading
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
  const page = query.page ? parseInt(query.page, 10) : 1;

  return {
    rightsListData: rightsMgmt.getIn(['rightsListData', status, page]),
    rightsListLoading: rightsMgmt.getIn(['rightsListLoading', status, page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getRightsList: (status, page) => dispatch(actions.getRightsList(status, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightsMgmt);
