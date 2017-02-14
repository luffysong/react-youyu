/**
 * ProjectList
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
import makeSelectProjectList from './selectors';

export class ProjectList extends PureComponent {
  render() {
    return (
      <div className="project-list-container">
        <Helmet
          title="ProjectList"
          meta={[
            { name: 'description', content: 'Description of ProjectList' },
          ]}
        />
        ProjectList
      </div>
    );
  }
}

ProjectList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProjectList: makeSelectProjectList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
