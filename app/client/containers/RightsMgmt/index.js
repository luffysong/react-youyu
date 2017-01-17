/**
 * RightsMgmt
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
import makeSelectRightsMgmt from './selectors';

export class RightsMgmt extends PureComponent {
  render() {
    return (
      <div className="rights-mgmt-container">
        <Helmet
          title="RightsMgmt"
          meta={[
            { name: 'description', content: 'Description of RightsMgmt' },
          ]}
        />
        RightsMgmt
      </div>
    );
  }
}

RightsMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RightsMgmt: makeSelectRightsMgmt(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightsMgmt);
