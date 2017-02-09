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
import * as selectors from './selectors';
import QuoteProgress from '../../components/QuoteProgress';

export class Quote extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="quote-container">
        <Helmet
          title="挂牌"
          meta={[
            { name: 'description', content: 'Description of Quote' },
          ]}
        />
        <QuoteProgress progress={this.props.params.step} />
        <div>
          {children}
        </div>
      </div>
    );
  }
}

Quote.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Quote: selectors.makeSelectQuote(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
