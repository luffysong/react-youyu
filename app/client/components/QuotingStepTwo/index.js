/**
 * QuoteStepTwo
 */

/**
 * External dependencies
 */
import React, {PureComponent} from 'react';
import ReactTooltip from 'react-tooltip';
import 'react-datepicker/dist/react-datepicker.css';
//import DatePicker from 'react-datepicker';
import moment from 'moment';
import { browserHistory } from 'react-router';
import Calendar from 'rc-calendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import 'rc-calendar/assets/index.css';
import DatePicker from 'rc-calendar/lib/Picker';

/**
 * Internal dependencies
 */
import './style.less';
import 'react-datepicker/dist/react-datepicker.css';

class QuoteStepTwo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      is_privacy: '0',
      specify: '0',
      dateBanned: '0',
      transferee_cert_type: '1',
      price: 0,
      transferee_lock_period: moment().locale('zh-cn').utcOffset(8),
    };
  }

  componentWillMount() {
    if (!this.props.data.listing_price) {
      browserHistory.push(`/quote/initial/${this.props.id}/1`);
    }
  }

  submit(event) {
    if (this.refs.quoteDays.value < 2 || this.refs.quoteDays.value > 60) {
      this.setState({
        daysErr: '请设置在2天至60天之间'
      });
      return;
    }
    if (!/^\d*$/.test(this.refs.quoteDays.value)) {
      this.setState({
        daysErr: '挂牌天数只能为整数'
      });
      return;
    }
    if (this.state.specify === '1') {
      if (!this.refs.transfereeName.value) {
        this.setState({
          transfereeNameErr: '受让方名称不能为空'
        });
        return;
      }
      if (!this.refs.transfereeNumber.value) {
        this.setState({
          transfereeNumberErr: '受让方证件号不能为空'
        });
        return;
      }
    }
    this.setState({
      allowSubmit: true
    });
    const {is_privacy, transferee_cert_type, transferee_lock_period} = this.state;
    this.props.data.is_privacy = is_privacy;
    if (this.state.specify === '1') {
      this.props.data.transferee_cert_type = transferee_cert_type;
      this.props.data.transferee_cert_name = this.refs.transfereeName.value;
      this.props.data.transferee_cert_number = this.refs.transfereeNumber.value;
    }
    if (this.state.dateBanned === '1') {
      this.props.data.transferee_lock_period = moment(transferee_lock_period).format('YYYY-MM-DD');
    }
    this.props.submit(this.props.data, () => this.setState({
      allowSubmit: false
    }), () => this.setState({
      allowSubmit: false
    }));
  }

  typeTransfer(target, event) {
    if (target === 'transfereeName') {
      if (event.target.value) {
        this.setState({
          transfereeNameErr: ''
        });
      } else {
        this.setState({
          transfereeNameErr: '受让方名称不能为空'
        });
      }
    } else {
      if (event.target.value) {
        this.setState({
          transfereeNumberErr: ''
        });
      } else {
        this.setState({
          transfereeNumberErr: '受让方名称不能为空'
        });
      }
    }
  }

  selectSpecify(val, event) {
    let obj = {};
    obj[val] = event.target.value;
    this.setState(obj);
  }

  selectDate(date) {
    this.setState({
      transferee_lock_period: moment(date)
    });
  }

  disabledDate(current) {
     if (!current) {
    // allow empty select
    return false;
  }
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current < date;  // can not select days before today
  }

  setDays(event) {
    if (event.target.value < 2 || event.target.value > 60) {
      this.setState({
        daysErr: '请设置在2天至60天之间'
      });
      return;
    }
    if (!/^\d*$/.test(event.target.value)) {
      this.setState({
        daysErr: '挂牌天数只能为整数'
      });
      return;
    }
    this.setState({
      daysErr: ''
    });
    this.props.data.listing_days = event.target.value;
  }

  agree(event) {
    this.setState({
      agree: !this.state.agree,
      allowSubmit: !this.state.allowSubmit,
    });
  }

  render() {
    const calendar = (<Calendar
                    locale={zhCN}
                    dateInputPlaceholder='请选择日期'
                    formatter='YYYY-MM-DD'
                    selected={this.state.transferee_lock_period}
                    showDateInput={true}
                    disabledDate={this.disabledDate}
                    onChange={this.selectDate.bind(this)} />);
    return (
      <div>
        <div className="list-col quote-days">
          <div className="col-attr">
            设置挂牌天数 :
          </div>
          <div className="col-value">
            <input type="text" data-tip data-for="quoteDays" className="price-input" placeholder="建议30天" onChange={this.setDays.bind(this)} ref="quoteDays"  />
            天
            {
              this.state.daysErr ? <span className="err-msg">{this.state.daysErr}</span> : null
            }
            {
              !this.state.daysErr ? <ReactTooltip class='quote-day-tooltip' id='quoteDays' type='light' place="right" effect="solid">
                <span>请设置在2天至60天之间</span>
              </ReactTooltip> : null
            }
          </div>
        </div>
        <div className="list-col">
          <div className="col-attr">
            隐藏个人信息 :
          </div>
          <div className="col-value">
            <div className={this.state.is_privacy === '0' ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.state.is_privacy === '0'} name="info" onChange={this.selectSpecify.bind(this, 'is_privacy')} value="0" id="noHide" />
            </div>
            <label htmlFor="noHide">
              不隐藏
            </label>
            <div className={this.state.is_privacy === '1' ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.state.is_privacy === '1'} name="info" onChange={this.selectSpecify.bind(this, 'is_privacy')} value="1" id="hide" />
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
                  证件类型 :
                </div>
                <div className="col-value">
                  <div className={this.state.transferee_cert_type === '1' ? 'quote-radio checked' : 'quote-radio'}>
                    <input type="radio" checked={this.state.transferee_cert_type === '1'} name="transferee_cert_type" onChange={this.selectSpecify.bind(this, 'transferee_cert_type')} value="1" id="idCard" />
                  </div>
                  <label htmlFor="noHide">
                    身份证
                  </label>
                  <div className={this.state.transferee_cert_type === '2' ? 'quote-radio checked' : 'quote-radio'}>
                    <input type="radio" checked={this.state.transferee_cert_type === '2'} name="transferee_cert_type" onChange={this.selectSpecify.bind(this, 'transferee_cert_type')} value="2" id="companyCode" />
                  </div>
                  <label htmlFor="hide">
                    企业信用代码
                  </label>
                </div>
              </div>
              <div className="list-col">
                <div className="col-attr">
                  受让方名称 :
                </div>
                <div className="col-value">
                  <input type="text" className="price-input specify-input" placeholder="真实姓名/组织机构名称" ref="transfereeName" onChange={this.typeTransfer.bind(this, 'transfereeName')} />
                  {
                    this.state.transfereeNameErr ? <span className="err-msg">{this.state.transfereeNameErr}</span> : null
                  }
                </div>
              </div>
              <div className="list-col">
                <div className="col-attr">
                  受让方证件号 :
                </div>
                <div className="col-value">
                  <input type="text" className="price-input specify-input" placeholder="身份证号/统一社会信用代码" ref="transfereeNumber" onChange={this.typeTransfer.bind(this, 'transfereeNumber')} />
                  {
                    this.state.transfereeNumberErr ? <span className="err-msg">{this.state.transfereeNumberErr}</span> : null
                  }
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
                <div className="col-value date-picker">
                  <DatePicker
          animation="slide-up"
           calendar={calendar}
          value={this.state.transferee_lock_period}
        >
          {
            ({ value }) => {
              return (
                <span tabIndex="0">
                <input
                  placeholder="please select"
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input"
                  value={value.format('YYYY-MM-DD')}
                />
                </span>
              );
            }
          }
          </DatePicker>

                  {/*<Calendar
                    dateFormat="YYYY-MM-DD"
                    selected={this.state.transferee_lock_period}
                    onChange={this.selectDate.bind(this)} />*/}
                  {/*<DateField
                    dateFormat="YYYY-MM-DD"
                    onChange={this.selectDate.bind(this)}
                  />*/}
                  <span className="date-tip">前受让方不能转让此份额</span>
                </div>
              </div>
            </div> : null
        }
        <div className="list-col">
          <div className="col-attr"></div>
          <div className="col-value">
            <div className={this.state.agree ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" name="memberType" onChange={this.agree.bind(this)} value="agree" id="agree" />
            </div>
            <label htmlFor="agree">
              同意：<a className="link-a" href="/protocol/service" target="_blank">《挂牌服务规则》</a>
            </label>
          </div>
        </div>
        <div className={`next-btn ${this.state.allowSubmit ? '' : 'disabled'}`} onClick={this.submit.bind(this)}>提交</div>
      </div>
    );
  }

}

export default QuoteStepTwo;
