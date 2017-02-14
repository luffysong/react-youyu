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
  componentDidMount() {
    this.props.loadProjectList();
  }

  renderProjects(loading, projects) {
    if (loading) {
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

function mapStateToProps(state) {
  const projectList = state.projectList;

  return {
    loading: projectList.get('projectListLoading'),
    data: projectList.get('projectListData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadProjectList: () => dispatch(actions.loadProjectList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
