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

export class Rights extends PureComponent {
  constructor(props) {
    super(props);

    this.selectHide = this.selectHide.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.state = {
      hideInfo: '0',
      specify: '0',
      dateBanned: '0',
      value: 0.5,
      price: 0
    };
  }

  render() {
    return (
      <div className="quote-initial-container">
        {
          `${this.props.params.step}` === `1` ? this.renderFirst() : ''
        }
        {
          `${this.props.params.step}` === `2` ? this.renderSecond() : ''
        }
        {
          `${this.props.params.step}` === `3` ? this.renderFinally() : ''
        }
      </div>
    );
  }

  selectHide(event) {
    this.setState({
      specify: event.target.value
    });
  }

  hideInfo(event) {
    this.setState({
      hideInfo: event.target.value
    });
  }

  setDate(event) {
    this.setState({
      dateBanned: event.target.value
    });
  }

  setPrice(event) {
    this.setState({
      price: event.target.value / 100
    });
  }

  /*第一步*/
  renderFirst() {
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
        <div className="list-col range-col">
          <div className="col-attr">
            现持有份额 :
          </div>
          <div className="col-value">
            8%
          </div>
        </div>
        <div className="list-col range-col">
          <div className="col-attr">
            可转让份额 :
          </div>
          <div className="col-value">
            <InputRange
              maxValue={8}
              minValue={0.5}
              formatLabel={value => `${value}%`}
              value={this.state.value}
              step={0.5}
              onChange={value => {this.setState({value: value})}} />
            {/*<Range />*/}
          </div>
        </div>
        <div className="list-col">
          <div className="col-attr">
            转让价格 :
          </div>
          <div className="col-value">
            <input type="text" className="price-input" onChange={this.setPrice}  />
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
        <Link to="/quote/rights/2" activeClassName="active" className="next-btn">下一步</Link>
      </div>
    );
  }

  /*第二步*/
  renderSecond() {
    return (
      <div>
        <div className="list-col quote-days">
          <div className="col-attr">
            设置挂牌天数 :
          </div>
          <div className="col-value">
            <input type="text" data-tip data-for="quoteDays" className="price-input" placeholder="建议30天" />
            <ReactTooltip class='quote-day-tooltip' id='quoteDays' type='light' place="right" effect="solid">
              <span>请设置在2天至60天之间</span>
            </ReactTooltip>
            天
          </div>
        </div>
        <div className="list-col">
          <div className="col-attr">
            隐藏个人信息 :
          </div>
          <div className="col-value">
            <div className={this.state.hideInfo === '0' ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.state.hideInfo === '0'} name="info" onChange={this.hideInfo} value="0" id="noHide" />
            </div>
            <label htmlFor="noHide">
              不隐藏
            </label>
            <div className={this.state.hideInfo === '1' ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.state.hideInfo === '1'} name="info" onChange={this.hideInfo} value="1" id="hide" />
            </div>
            <label htmlFor="hide">
              隐藏
            </label>
          </div>
        </div>
        <div className="list-col set-specify">
          <div className="col-attr">
            指定受让方 :
          </div>
          <div className="col-value">
            <div className={this.state.specify === '0' ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.state.specify === '0'} name="specify" onChange={this.selectHide} value="0" id="noSpecify" />

            </div>
            <label htmlFor="noSpecify">
              不指定
            </label>
            <div className={this.state.specify === '1' ? 'quote-radio checked' : 'quote-radio'} data-tip data-for="setSpecify">
              <input type="radio" checked={this.state.specify === '1'} name="specify" onChange={this.selectHide} value="1" id="specify" />
            </div>
            <ReactTooltip class='quote-day-tooltip' id='setSpecify' type='light' place="right" effect="solid">
              <span>指定受让方后,只能被指定的人可以摘牌</span>
            </ReactTooltip>
            <label htmlFor="specify" >
              指定
            </label>
          </div>
        </div>
        {
          this.state.specify === '1' ?
            <div>
              <div className="list-col">
                <div className="col-attr">
                  受让方名称 :
                </div>
                <div className="col-value">
                  <input type="text" className="price-input specify-input" placeholder="真实姓名/组织机构名称" />
                </div>
              </div>
              <div className="list-col">
                <div className="col-attr">
                  受让方证件号 :
                </div>
                <div className="col-value">
                  <input type="text" className="price-input specify-input" placeholder="身份证号/统一社会信用代码" />
                </div>
              </div>
            </div> : null
        }
        {
          this.state.dateBanned === '1' ?
            <div>
              <div className="list-col">
                <div className="col-attr">
                </div>
                <div className="col-value">
                  <select name="" id="">
                    <option value="">2015</option>
                    <option value="">2016</option>
                    <option value="">2017</option>
                  </select>
                  <select name="" id="">
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                  </select>
                  <select name="" id="">
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                  </select>
                  前受让方不能转让此份额
                </div>
              </div>
            </div> : null
        }

        <Link to="/quote/rights/3" activeClassName="active" className="next-btn">提交</Link>
      </div>
    );
  }

  renderFinally() {
    return (
      <div>
        <img className="suc-logo" src={require('./imgs/submitSuc.png')} alt=""/>
        <section className="submit-suc">提交完成</section>
        <section className="suc-tip">我们将在3个工作日内通知您审核结果</section>
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
