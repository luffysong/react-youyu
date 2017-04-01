/**
 * Project
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
import ProjectBanner from '../../components/ProjectBanner';
import PayFlowBar from '../../components/PayFlowBar';
import Panel from '../../components/Panel';
import ProjectProgres from '../../components/ProjectProgress';
import ProjectNav from '../../components/ProjectNav';
import RouteTransition from '../../components/RouteTransition';
import * as actions from './actions';
import Tracker from '../../components/Tracker';

export class Project extends PureComponent {
  componentDidMount() {
    const { params } = this.props;
    const projectId = params.id ? params.id : 0;

    this.props.loadProject(projectId, () => {
      /*转让中的份额暂无数据*/
      if ((!this.props.projectData.listing || !this.props.projectData.listing.length) && this.props.router.getCurrentLocation().pathname.indexOf('detail') < 0) {
        this.props.router.push(`/project/${projectId}/detail`);
      }
    });
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.params.id;
    const newId = this.props.params.id;

    if (oldId !== newId) {
      this.props.loadProject(newId);
    }
  }

  renderNotice(loading, data) {
    const notice = get(data, 'notice');
    if (loading) {
      return <Panel title="重要公告"
          icon={require('./imgs/icon_inpor_notice_leftbar.svg')}
          className="project-container-notice-panel loading"
        >
        </Panel>;
    }
    if (!notice) {
      return null;
    }
    return <Panel title="重要公告"
        icon={require('./imgs/icon_inpor_notice_leftbar.svg')}
        className="project-container-notice-panel"
      >
        {notice}
      </Panel>;
  }

  renderProgress(loading, data) {
    const progress = get(data, 'progress');
    if (loading) {
      return <Panel title="项目进展"
        icon={require('./imgs/icon_proj_leftbar.svg')}
        className="project-container-progress-panel"
      >
      </Panel>
    }
    if (!progress || !progress.length) {
      return null;
    }
    return <Panel title="项目进展"
      icon={require('./imgs/icon_proj_leftbar.svg')}
      className="project-container-progress-panel"
    >
      <ProjectProgres data={progress} />
    </Panel>
  }

  render() {
    const { children, params, projectData, projectLoading } = this.props;

    return (
      <div className="project-container">
        <Helmet title="项目详情" />
        <ProjectBanner data={projectData} loading={projectLoading} />
        <PayFlowBar />
        <div className="container project-wrapper">
          <div className="project-container-left">
            <ProjectNav id={params.id} data={projectData} />
            <RouteTransition>
              {children}
            </RouteTransition>
          </div>
          <div className="project-container-right">
            {this.renderNotice(projectLoading, projectData)}
            {this.renderProgress(projectLoading, projectData)}
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
    loadProject: (id, callback) => dispatch(actions.loadProject(id, callback)),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(Project));
