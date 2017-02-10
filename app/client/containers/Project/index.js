/**
 * Project
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
import ProjectBanner from '../../components/ProjectBanner';
import PayFlowBar from '../../components/PayFlowBar';
import Panel from '../../components/Panel';
import ProjectProgres from '../../components/ProjectProgress';
import ProjectNav from '../../components/ProjectNav';
import RouteTransition from '../../components/RouteTransition';
import * as actions from './actions';

export class Project extends PureComponent {
  componentDidMount() {
    const { params } = this.props;
    const projectId = params.id ? params.id : 0;

    this.props.loadProject(projectId);
  }

  render() {
    const { children, params, projectData, projectLoading } = this.props;

    return (
      <div className="project-container">
        <Helmet
          title="项目详情"
          meta={[
            { name: 'description', content: 'Description of Project' },
          ]}
        />
        <ProjectBanner data={projectData} loading={projectLoading} />
        <PayFlowBar />
        <div className="container project-wrapper">
          <div className="project-container-left">
            <ProjectNav id={params.id} />
            <RouteTransition>
              {children}
            </RouteTransition>
          </div>
          <div className="project-container-right">
            <Panel title="重要公告"
              icon={require('./imgs/icon_inpor_notice_leftbar.svg')}
              className="project-container-notice-panel"
            >
              影片将于2017年1月1日在全国各大影院上线，首映会将在北京万达影城举行。
            </Panel>
            <Panel title="项目进展"
              icon={require('./imgs/icon_proj_leftbar.svg')}
              className="project-container-progress-panel"
            >
              <ProjectProgres />
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state, props) {
  const project = state.project;
  const id = props.params.id ? props.params.id : 0;

  return {
    projectLoading: project.getIn(['projectLoading', id]),
    projectData: project.getIn(['projectData', id]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadProject: (id) => dispatch(actions.loadProject(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
