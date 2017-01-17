/**
 * Accept
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
import makeSelectAccept from './selectors';

export class Accept extends PureComponent {
  render() {
    return (
      <div className="accept-container">
        <Helmet
          title="Accept"
          meta={[
            { name: 'description', content: 'Description of Accept' },
          ]}
        />
        Accept
      </div>
    );
  }
}

Accept.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Accept: makeSelectAccept(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accept);
