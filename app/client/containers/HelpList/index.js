/**
 * HelpList
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
import HelpListItems from '../../components/HelpListItems';
import Pagination from '../../components/Pagination';
import Empty from '../../components/Empty';
import * as actions from './actions';
import Tracker from '../../components/Tracker';

export class HelpList extends PureComponent {
  constructor(props) {
    super(props);
    this.onPageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const columnId = this.props.params.id;
    const query = this.props.location.query;
    const page = query.page ? query.page : '1';
    if (!this.props.listData) {
      this.props.loadList(columnId, page);
    }
  }

  componentDidUpdate(prevProps) {
    const columnId = this.props.params.id;
    const query = this.props.location.query;
    const page = query.page ? query.page : '1';
    const prevQuery = prevProps.location.query;
    const oldPage = prevQuery.page;

    if (oldPage && (page !== oldPage) && !this.props.listData) {
      this.props.loadList(columnId, page);
    }
  }

  handlePageChange(page) {
    const columnId = this.props.params.id;
    if (!page || page.selected === undefined) {
      return false;
    }
    this.props.router.push({
      pathname: `/help/list/${columnId}`,
      query: {
        page: '' + (page.selected + 1),
      }
    });
  }

  hasItems(listData) {
    const data = get(listData, 'data');
    return data && data.length;
  }

  render() {
    const { listLoading, listData } = this.props;

    const pageInfo = {
      currentPage: get(listData, 'current_page'),
      lastPage: get(listData, 'last_page'),
    };

    return (
      <div className="help-list-container">
        <Helmet title="帮助中心" />
        {
          listLoading || (!listLoading && this.hasItems(listData))
          ? <HelpListItems loading={listLoading} data={listData} />
          : <Empty text="暂时还没有数据哦" />
        }
        {
          (listLoading || (!listLoading && !this.hasItems(listData)))
          ? null
          : <Pagination pageInfo={pageInfo} onPageChange={this.onPageChange} className="help-list-pagination" />
        }
      </div>
    );
  }
}

HelpList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const helpList = state.helpList;
  const columnId = props.params.id;
  const query = props.location.query;
  const page = query.page ? query.page : '1';

  return {
    listLoading: helpList.getIn(['loading', columnId, page]),
    listData: helpList.getIn(['data', columnId, page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadList: (columnId, page) => dispatch(actions.loadList(columnId, page)),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(HelpList));
