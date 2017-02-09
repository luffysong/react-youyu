/**
 * Rights
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import 'react-input-range/lib/css/index.css';


/**
 * Internal dependencies
 */
import './style.less';
import makeSelectQuote from './selectors';
import QuoteSuc from '../../components/QuotingSuc';
import QuoteStepTwo from '../../components/QuotingStepTwo';
import QuoteStepOne from '../../components/QuotingStepOne';

export class Rights extends PureComponent {

  render() {
    return (
      <div className="quote-initial-container">
        {
          `${this.props.params.step}` === `1` ? <QuoteStepOne id={this.props.params.id} data={this.props.data} display="rights"/> : ''
        }
        {
          `${this.props.params.step}` === `2` ? <QuoteStepTwo display="rights" /> : ''
        }
        {
          `${this.props.params.step}` === `3` ? <QuoteSuc /> : ''
        }
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
