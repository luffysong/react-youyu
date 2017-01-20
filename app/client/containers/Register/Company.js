/**
 * Register - Company
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

export class Company extends PureComponent {
  render() {
    return (
      <div className="register-container-company">
        <Helmet title="企业开户" />
        <h4 className="register-container-company-title">企业注册</h4>
      </div>
    );
  }
}

Company.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Company);
