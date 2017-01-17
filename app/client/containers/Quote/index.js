/**
 * Quote
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
import makeSelectQuote from './selectors';

export class Quote extends PureComponent {
  render() {
    return (
      <div className="quote-container">
        <Helmet
          title="Quote"
          meta={[
            { name: 'description', content: 'Description of Quote' },
          ]}
        />
        Quote
      </div>
    );
  }
}

Quote.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Quote: makeSelectQuote(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
