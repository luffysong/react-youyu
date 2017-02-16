/**
 * ProjectList
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
import ProjectItem from '../../components/ProjectItem';
import * as actions from './actions';

export class ProjectList extends PureComponent {
  constructor(props) {
    super(props);

    const query = this.props.location.query;
    const page = query.page || 1;
    this.state = {
      page,
    };
  }

  componentDidMount() {
    this.props.loadProjectList(this.state.page);
  }

  renderProjects(loading, projects) {
    if (loading || loading === undefined) {
      return Array(3).fill().map((_, index) => {
        return <ProjectItem key={`project-item-${index}`} loading={true}></ProjectItem>;
      });
    }

    return projects.map((item, index) => {
      return (
        <ProjectItem data={item} type="list"
          key={`project-item-${index}`}>
        </ProjectItem>
      );
    });
  }

  render() {
    const { loading, data } = this.props;

    return (
      <div className="project-list-container">
        <Helmet title="项目列表" />
        <div className="container">
          { this.renderProjects(loading, data) }
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
  const page = query.page || 1;

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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
