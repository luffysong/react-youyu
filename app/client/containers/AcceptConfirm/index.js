/**
 * AcceptConfirm
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
import makeSelectAcceptConfirm from './selectors';

export class AcceptConfirm extends PureComponent {
  render() {
    return (
      <div className="accept-confirm-container">
        <Helmet
          title="AcceptConfirm"
          meta={[
            { name: 'description', content: 'Description of AcceptConfirm' },
          ]}
        />
        AcceptConfirm
      </div>
    );
  }
}

AcceptConfirm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AcceptConfirm: makeSelectAcceptConfirm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptConfirm);
