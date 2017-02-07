/**
 * QuoteStepTwo
 */

/**
 * External dependencies
 */
import React, {PureComponent} from 'react';
import ReactTooltip from 'react-tooltip';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { DateField } from 'react-date-picker';
import { Link } from 'react-router';
import 'react-date-picker/index.css';

/**
 * Internal dependencies
 */
import './style.less';

class QuoteStepTwo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hideInfo: '0',
      specify: '0',
      dateBanned: '1',
      price: 0
    };
  }

  selectSpecify(val, event) {
    let obj = {};
    obj[val] = event.target.value;
    this.setState(obj);
  }

  selectDate(dateString, { dateMoment, timestamp }) {
    console.log(dateString);
  }

  render() {
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
              <input type="radio" checked={this.state.hideInfo === '0'} name="info" onChange={this.selectSpecify.bind(this, 'hideInfo')} value="0" id="noHide" />
            </div>
            <label htmlFor="noHide">
              不隐藏
            </label>
            <div className={this.state.hideInfo === '1' ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.state.hideInfo === '1'} name="info" onChange={this.selectSpecify.bind(this, 'hideInfo')} value="1" id="hide" />
            </div>
            <label htmlFor="hide">
              隐藏
            </label>
          </div>
        </div>
        <div className="list-col set-specify">
          <div className="col-attr"  onClick={this.selectSpecify.bind(this, 1)}>
            指定受让方 :
          </div>
          <div className="col-value">
            <div className={this.state.specify === '0' ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.state.specify === '0'} name="specify" onChange={this.selectSpecify.bind(this, 'specify')} value="0" id="noSpecify" />

            </div>
            <label htmlFor="noSpecify">
              不指定
            </label>
            <div className={this.state.specify === '1' ? 'quote-radio checked' : 'quote-radio'} data-tip data-for="setSpecify">
              <input type="radio" checked={this.state.specify === '1'} name="specify" onChange={this.selectSpecify.bind(this, 'specify')} value="1" id="specify" />
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
          !this.props.display ?
            <div className="list-col">
              <div className="col-attr">
                设置禁售期 :
              </div>
              <div className="col-value">
                <div className={this.state.dateBanned === '0' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" checked={this.state.dateBanned === '0'} name="bannedDate" onChange={this.selectSpecify.bind(this, 'dateBanned')} value="0" id="noDate" />
                </div>
                <label htmlFor="noDate">
                  不设置
                </label>
                <div className={this.state.dateBanned === '1' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" checked={this.state.dateBanned === '1'} name="bannedDate" onChange={this.selectSpecify.bind(this, 'dateBanned')} value="1" id="date" />
                </div>
                <label htmlFor="date">
                  设置
                </label>
              </div>
            </div> : null
        }

        {
          this.state.dateBanned === '1' && !this.props.display ?
            <div>
              <div className="list-col">
                <div className="col-attr">
                </div>
                <div className="col-value">
                  <DateField
                    dateFormat="YYYY-MM-DD"
                    onChange={this.selectDate}
                  />
                  <span className="date-tip">前受让方不能转让此份额</span>
                </div>
              </div>
            </div> : null
        }

        <Link to="/quote/initial/3" activeClassName="active" className="next-btn">提交</Link>
      </div>
    );
  }

}

export default QuoteStepTwo;
