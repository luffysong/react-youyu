/**
 * ProjectList
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
import ProjectItem from '../../components/ProjectItem';
import Pagination from '../../components/Pagination';
import Empty from '../../components/Empty';
import * as actions from './actions';
import Tracker from '../../components/Tracker';

export class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
    this.onPageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.query;
    const page = query.page || '1';
    this.props.loadProjectList(page);
  }

  componentDidUpdate(prevProps) {
    const query = this.props.location.query;
    const page = query.page || '1';
    const prevQuery = prevProps.location.query;
    const prevPage = prevQuery.page || '1';

    if (prevPage && (page !== prevPage)) {
      this.props.loadProjectList(page);
    }
  }

  renderProjects(loading, data) {
    if (loading || loading === undefined) {
      return fill(Array(3), 0).map((_, index) => {
        return <ProjectItem key={`project-item-${index}`} loading={true}></ProjectItem>;
      });
    }

    return data && data.length ? data.map((item, index) => {
      return (
        <ProjectItem data={item} type="list"
          key={`project-item-${index}`}>
        </ProjectItem>
      );
    }): <Empty text="暂时没有数据哦" />;
  }

  handlePageChange(page) {
    if (!page || page.selected === undefined) {
      return false;
    }
    this.props.router.push({
      pathname: '/projects',
      query: {
        page: '' + (page.selected + 1),
      }
    });
  }

  render() {
    const { loading, data } = this.props;
    const pageInfo = {
      currentPage: get(data, 'current_page'),
      lastPage: get(data, 'last_page'),
    };
    const projects = get(data, 'data');

    return (
      <div className="project-list-container">
        <Helmet title="项目列表" />
        <div className="container">
          { this.renderProjects(loading, projects) }
          {
            (loading || (!loading && !(projects && projects.length)))
            ? null
            : <Pagination pageInfo={pageInfo} onPageChange={this.onPageChange} className="project-list-pagination" />
          }
        </div>
      </div>
    );
  }
}

ProjectList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const projectList = state.projectList;
  const query = props.location.query;
  const page = query.page || '1';

  return {
    loading: projectList.getIn(['projectListLoading', page]),
    data: projectList.getIn(['projectListData', page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadProjectList: (page) => dispatch(actions.loadProjectList(page)),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(ProjectList));
