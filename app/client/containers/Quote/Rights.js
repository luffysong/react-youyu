/**
 * Rights
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import 'react-input-range/lib/css/index.css';


/**
 * Internal dependencies
 */
import './style.less';
import QuoteSuc from '../../components/QuotingSuc';
import QuoteStepTwo from '../../components/QuotingStepTwo';
import QuoteStepOne from '../../components/QuotingStepOne';
import * as actions from './actions';

export class Rights extends PureComponent {
  constructor(props) {
    super(props);
    this.submitData = {};
    this.props.rightsInfo(this.props.params.id);
  }

  submit(params) {
    this.props.rightsQuote(params).then(data => this.props.router.push(`/quote/rights/${this.props.params.id}/3`))
      .catch(err => console.log(err));
  }

  render() {
    const {rightsInfoData} = this.props;
    return (
      <div className="quote-initial-container">
        {
          `${this.props.params.step}` === `1` ? <QuoteStepOne display="rights" id={this.props.params.id} data={this.submitData} source={rightsInfoData} /> : ''
        }
        {
          `${this.props.params.step}` === `2` ? <QuoteStepTwo display="rights" id={this.props.params.id} data={this.submitData} submit={this.submit.bind(this)} /> : ''
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

function mapStateToProps(state) {
  const quote = state.quote;

  return {
    rightsQuoteLoading: quote.get('rightsQuoteLoading'),
    rightsQuoteData: quote.get('rightsQuoteData'),
    rightsInfoLoading: quote.get('rightsInfoLoading'),
    rightsInfoData: quote.get('rightsInfoData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    rightsQuote: (params, callback) => dispatch(actions.rightsQuote(params, callback)),
    rightsInfo: (params) => dispatch(actions.rightsInfo(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rights);
