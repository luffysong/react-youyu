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
import StepNav from '../../components/StepNav';

export class Accept extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="accept-container">
        <Helmet
          title="摘牌"
          meta={[
            { name: 'description', content: 'Description of Accept' },
          ]}
        />
        <div className="accept-wrapper container">
          <StepNav />
          {children}
        </div>
      </div>
    );
  }
}

Accept.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
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
