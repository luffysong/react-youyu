/**
 * Register
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import Tracker from '../../components/Tracker';

export class Register extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="register-container">
        <Helmet title="会员认证" />
        {children}
      </div>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function mapStateToProps () {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(Register));
