
/**
 * Quoting
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import Tracker from '../../components/Tracker';
import QuotingList from '../../components/QuotingList';

export class Quoting extends PureComponent {
  render() {
    const { projectLoading, projectData } = this.props;

    return (
      <div className="project-container-quoting-tab">
        <Helmet title="转让中的份额" />
        <QuotingList loading={projectLoading} data={get(projectData, 'listing')} />
      </div>
    );
  }
}

Quoting.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(Quoting));
