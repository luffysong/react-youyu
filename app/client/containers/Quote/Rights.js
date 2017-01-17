/**
 * Rights
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

export class Rights extends PureComponent {
  render() {
    return (
      <div className="quote-container">
        <Helmet
          title="Rights"
          meta={[
            { name: 'description', content: 'Description of Rights' },
          ]}
        />
        Rights
      </div>
    );
  }
}

Rights.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Rights);
