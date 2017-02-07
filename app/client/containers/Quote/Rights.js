/**
 * Rights
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
/*import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';*/
import ReactTooltip from 'react-tooltip';
/*import 'icheck/skins/all.css'; // or single skin css
import {Checkbox, Radio, RadioGroup} from 'react-icheck';*/
import InputRange from 'react-input-range';
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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quote-initial-container">
        {
          `${this.props.params.step}` === `1` ? <QuoteStepOne display="rights"/> : ''
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
