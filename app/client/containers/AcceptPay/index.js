/**
 * AcceptPay
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
import makeSelectAcceptPay from './selectors';

export class AcceptPay extends PureComponent {
  render() {
    return (
      <div className="accept-pay-container">
        <Helmet
          title="AcceptPay"
          meta={[
            { name: 'description', content: 'Description of AcceptPay' },
          ]}
        />
        AcceptPay
      </div>
    );
  }
}

AcceptPay.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AcceptPay: makeSelectAcceptPay(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptPay);
