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

export class Project extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="project-container">
        <Helmet
          title="Project"
          meta={[
            { name: 'description', content: 'Description of Project' },
          ]}
        />
        Project
        {children}
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