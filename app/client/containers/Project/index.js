/**
 * Project
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

/**
 * Internal dependencies
 */
import './style.less';
import makeSelectProject from './selectors';
import ProjectBanner from '../../components/ProjectBanner';
import PayFlowBar from '../../components/PayFlowBar';
import Panel from '../../components/Panel';
import ProjectProgres from '../../components/ProjectProgress';

export class Project extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="project-container">
        <Helmet
          title="项目详情"
          meta={[
            { name: 'description', content: 'Description of Project' },
          ]}
        />
        <ProjectBanner />
        <PayFlowBar />
        <div className="container project-wrapper">
          <div className="project-container-left">
            {children}
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

const mapStateToProps = createStructuredSelector({
  Project: makeSelectProject(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
