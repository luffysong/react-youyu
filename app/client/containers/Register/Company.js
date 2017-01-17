/**
 * Company Register
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
      <div className="register-container">
        <Helmet
          title="Company"
          meta={[
            { name: 'description', content: 'Description of Company' },
          ]}
        />
        Company
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
