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
import ProjectNotice from '../../components/ProjectNotice';
import ProjectProgress from '../../components/ProjectProgress';

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
        <div className="container">
          {children}
          <ProjectNotice />
          <ProjectProgress />
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
