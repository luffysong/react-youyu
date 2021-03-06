/**
 * Initial
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';


/**
 * Internal dependencies
 */
import './style.less';
import QuoteSuc from '../../components/QuotingSuc';
import QuoteStepTwo from '../../components/QuotingStepTwo';
import QuoteStepOne from '../../components/QuotingStepOne';
import * as actions from './actions';
import Tracker from '../../components/Tracker';

export class Initial extends PureComponent {
  constructor(props) {
    super(props);
    this.submitData = {};
    this.props.initialInfo(this.props.params.id);
  }

  submit(params, suc, err) {
    this.props.initialQuote(params, () => {
      this.submitData = {};
      this.props.router.push(`/quote/initial/${this.props.params.id}/3`);
      suc();
    }, () => err());
  }

  render() {
    const {initialInfoData} = this.props;
    return (
      <div className="quote-initial-container">
        {
          `${this.props.params.step}` === `1` ? <QuoteStepOne id={this.props.params.id} data={this.submitData} source={initialInfoData} />  : ''
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

function mapStateToProps(state) {
  const quote = state.quote;

  return {
    initialQuoteLoading: quote.get('initialQuoteLoading'),
    initialQuoteData: quote.get('initialQuoteData'),
    initialInfoLoading: quote.get('initialInfoLoading'),
    initialInfoData: quote.get('initialInfoData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    initialQuote: (params, callback, err) => dispatch(actions.initialQuote(params, callback, err)),
    initialInfo: (params) => dispatch(actions.initialInfo(params)),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(Initial));
