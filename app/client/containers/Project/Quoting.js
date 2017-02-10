
/**
 * Quoting
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import QuotingList from '../../components/QuotingList';

export class Quoting extends PureComponent {
  render() {
    const { projectLoading, projectData } = this.props;

    return (
      <div className="project-container-quoting-tab">
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

export default connect(mapStateToProps, mapDispatchToProps)(Quoting);
