/**
 * OrderMgmt
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
import makeSelectOrderMgmt from './selectors';

export class OrderMgmt extends PureComponent {
  render() {
    return (
      <div className="order-mgmt-container">
        <Helmet
          title="OrderMgmt"
          meta={[
            { name: 'description', content: 'Description of OrderMgmt' },
          ]}
        />
        OrderMgmt
      </div>
    );
  }
}

OrderMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  OrderMgmt: makeSelectOrderMgmt(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderMgmt);