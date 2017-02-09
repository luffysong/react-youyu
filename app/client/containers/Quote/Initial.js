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
import QuoteSuc from '../../components/QuotingSuc';
import QuoteStepTwo from '../../components/QuotingStepTwo';
import QuoteStepOne from '../../components/QuotingStepOne';
import * as actions from './actions';
import * as selectors from './selectors';

export class Initial extends PureComponent {
  constructor(props) {
    super(props);
    this.submitData = {
      name: 1
    };
  }

  submit(params) {
    console.log(params);
    console.log(this.props.initialQuote(params).then(data => console.log(data))
      .catch(err => console.log(err)));
  }

  render() {
    return (
      <div className="quote-initial-container">
        {
          `${this.props.params.step}` === `1` ? <QuoteStepOne id={this.props.params.id} data={this.submitData} />  : ''
        }
        {
          `${this.props.params.step}` === `2` ? <QuoteStepTwo id={this.props.params.id} data={this.submitData} submit={this.submit.bind(this)} /> : ''
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
  Quote: selectors.makeSelectQuote(),
  quoteLoading: selectors.makeSelectQuoteLoading(),
  quoteData: selectors.makeSelectQuoteData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    initialQuote: (params) => dispatch(actions.initialQuote(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
