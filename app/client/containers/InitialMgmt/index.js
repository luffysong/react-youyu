/**
 * InitialMgmt
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
import makeSelectInitialMgmt from './selectors';

export class InitialMgmt extends PureComponent {
  render() {
    return (
      <div className="initial-mgmt-container">
        <Helmet
          title="InitialMgmt"
          meta={[
            { name: 'description', content: 'Description of InitialMgmt' },
          ]}
        />
        InitialMgmt
      </div>
    );
  }
}

InitialMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  InitialMgmt: makeSelectInitialMgmt(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialMgmt);
