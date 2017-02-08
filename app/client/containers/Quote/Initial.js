/**
 * Initial
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


/**
 * Internal dependencies
 */
import './style.less';
import makeSelectQuote from './selectors';
import QuoteSuc from '../../components/QuotingSuc';
import QuoteStepTwo from '../../components/QuotingStepTwo';
import QuoteStepOne from '../../components/QuotingStepOne';

export class Initial extends PureComponent {
  render() {
    return (
      <div className="quote-initial-container">
        {
          `${this.props.params.step}` === `1` ? <QuoteStepOne /> : ''
        }
        {
          `${this.props.params.step}` === `2` ? <QuoteStepTwo /> : ''
        }
        {
          `${this.props.params.step}` === `3` ? <QuoteSuc /> : ''
        }
      </div>
    );
  }

}

Initial.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
