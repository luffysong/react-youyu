/**
 * QuoteStepOne
 */

/**
 * External dependencies
 */
import React, {PureComponent} from 'react';
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
      value: 0.5
    };
  }

  setPrice(event) {
    this.setState({
      price: event.target.value / 100
    });
  }

  render() {
    return (
      <div>
        <div className="list-col">
          <div className="col-attr">
            项目名称 :
          </div>
          <div className="col-value">
            <b>神奇的动物在哪里</b>
          </div>
        </div>
        <div className="list-col">
          <div className="col-attr">
            制片方 :
          </div>
          <div className="col-value">
            华纳
          </div>
        </div>

        {
          !this.props.display ?
            <div>
              <div className="list-col">
                <div className="col-attr">
                  原始份额 :
                </div>
                <div className="col-value">
                  10%
                </div>
              </div>
              <div className="list-col range-col">
                <div className="col-attr">
                  现持有原始份额 :
                </div>
                <div className="col-value">
                  8%
                </div>
              </div>
            </div> : null
        }

        {
          this.props.display === 'rights' ?
            <div className="list-col range-col">
              <div className="col-attr">
                现持有份额 :
              </div>
              <div className="col-value">
                8%
              </div>
            </div> : null
        }

        <div className="list-col range-col quote-initial">
          <div className="col-attr">
            可转让份额 :
          </div>
          <div className="col-value quote-initial" data-tip data-for="quoteInitial">
            <InputRange
              maxValue={7}
              minValue={0.5}
              formatLabel={value => `${value}%`}
              value={this.state.value}
              step={0.5}
              onChange={value => {this.setState({value: value})}} />
            <div className="max-initial">8%</div>
          </div>
          <ReactTooltip class='quote-day-tooltip' id='quoteInitial' type='light' place="right" effect="solid">
            <section>转让份额的最小单位是0.5%,</section>
            <section>且不能超过原始份额的70%</section>
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
            转让价格 X 1%=<span className="finally-price" data-tip data-for="costIntro">{this.state.price}元</span>
            <ReactTooltip class='quote-day-tooltip' id='costIntro' type='light' place="right" effect="solid">
              <span>服务费将会在转让成功后扣除</span>
            </ReactTooltip>
          </div>
        </div>
        <Link to="/quote/initial/2" activeClassName="active" className="next-btn">下一步</Link>
      </div>
    );
  }

}

export default QuoteStepOne;
