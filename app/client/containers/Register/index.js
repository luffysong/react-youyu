/**
 * Register
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

export class Register extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="register-container">
        <Helmet
          title="Register"
          meta={[
            { name: 'description', content: 'Description of Register' },
          ]}
        />
        {children}
      </div>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
