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

  render() {
    return (
      <div className="project-list-container">
        <Helmet title="项目列表" />
        <div className="container">
          {
            Array(3).fill().map((_, index) => {
              return <ProjectItem loading={true} key={`project-item-${index}`} />;
            })
          }
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
    projectListLoading: projectList.get('projectListLoading'),
    projectListData: projectList.get('projectListData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadProjectList: () => dispatch(actions.loadProjectList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
