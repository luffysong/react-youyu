/**
 * QuoteStepOne
 */

/**
 * External dependencies
 */
import React, {PropTypes, PureComponent} from 'react';
import ReactTooltip from 'react-tooltip';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { Link } from 'react-router';
/**
 * Internal dependencies
 */
import './style.less';

class QuoteStepOne extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listing_quota: 0.5
    };
  }

  setPrice(event) {
    this.setState({
      listing_price: event.target.value
    });
  }

  nextStep(event) {
    const {listing_quota, listing_price} = this.state;
    this.props.data.listing_quota = listing_quota;
    this.props.data.listing_price = listing_price;
    console.log(this.props.data);
  }

  render() {
    return (
      <div>
        <div className="list-col">
          <div className="col-attr">
            项目名称 :
          </div>
          <div className="col-value">
            <b>{this.props.source.project_name}</b>
          </div>
        </div>
        <div className="list-col range-col">
          <div className="col-attr">
            制片方 :
          </div>
          <div className="col-value">
            {this.props.source.producer}
          </div>
        </div>

        <div className="list-col range-col quote-initial">
          <div className="col-attr">
            可转让份额 :
          </div>
          <div className="col-value" data-tip data-for="quoteInitial">
            <InputRange
              maxValue={this.props.source.tradable_quote * 100}
              minValue={0.5}
              formatLabel={value => `${value}%`}
              value={this.state.listing_quota}
              step={0.5}
              onChange={value => {this.setState({listing_quota: value})}} />
          </div>
          <ReactTooltip class='quote-day-tooltip' id='quoteInitial' type='light' place="right" effect="solid">
            <section>转让份额的最小单位是0.5%</section>
          </ReactTooltip>
        </div>
        <div className="list-col">
          <div className="col-attr">
            转让价格 :
          </div>
          <div className="col-value">
            <input type="text" className="price-input" onChange={this.setPrice.bind(this)}  />
            元
          </div>
        </div>
        <div className="list-col service-price">
          <div className="col-attr">
            服务费 :
          </div>
          <div className="col-value">
            转让价格 X {this.props.source.service_rate * 100}%=<span className="finally-price" data-tip data-for="costIntro">{this.state.listing_price ? (this.state.listing_price * this.props.source.service_rate).toFixed(2) : 0}元</span>
            <ReactTooltip class='quote-day-tooltip' id='costIntro' type='light' place="right" effect="solid">
              <span>服务费将会在转让成功后扣除</span>
            </ReactTooltip>
          </div>
        </div>
        <Link to={`/quote/${this.props.display === 'rights' ? 'rights' : 'initial'}/${this.props.id}/2`} activeClassName="active" className="next-btn" onClick={this.nextStep.bind(this)}>下一步</Link>
      </div>
    );
  }
}

QuoteStepOne.propTypes = {
  id: PropTypes.string,
};

export default QuoteStepOne;
