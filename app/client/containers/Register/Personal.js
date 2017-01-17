/**
 * Personal Register
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
import makeSelectRegister from './selectors';

export class Personal extends PureComponent {
  render() {
    return (
      <div className="register-container">
        <Helmet
          title="Personal"
          meta={[
            { name: 'description', content: 'Description of Personal' },
          ]}
        />
        Personal
      </div>
    );
  }
}

Personal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
