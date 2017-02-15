/**
 * Personal Register
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import * as actions from './actions';
import message from '../../components/Message';
import UploadBtn from  '../../components/UploadButton';

/**
 * Internal dependencies
 */
import './style.less';

export class Personal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      memberType: '1',
      qualification: '10',
      agree: false,
      // id card
      idcardimg: '',
      idcardloading: false,
      idcardprogress: '',
      idcardloaded: false,
      // business card
      businesscardimg: '',
      businesscardloading: false,
      businesscardprogress: '',
      businesscardloaded: false,
    };

    this.uploadIdCardParams = {
      success: (data) => {
        this.setState({
          idcardimg: data
        });
        this.setState({
          idcardloading: false,
          idcardloaded: true
        });
      },
      progress: (data) => {
        this.setState({
          idcardloading: true,
          idcardprogress: `${data}%`
        });
      },
      error: (msg) => {
        this.setState({
          idcardloading: false,
        });
        console.log(msg);
        message.error(msg);
      },
      params: {
        'image-width-range': '0, 3000'
      }
    };

    this.uploadBusinessCardParams = {
      success: (data) => {
        this.setState({
          businesscardimg: data
        });
        this.setState({
          businesscardloading: false,
          businesscardloaded: true
        });
      },
      progress: (data) => {
        this.setState({
          businesscardloading: true,
          businesscardprogress: `${data}%`
        });
      },
      error: (msg) => {
        this.setState({
          businesscardloading: false,
        });
        console.log(msg);
        message.error(msg);
      },
      params: {
        'image-width-range': '0, 3000'
      }
    };
  }

  selectType(event) {
    this.setState({
      memberType: event.target.value
    });
  }

  // 选择投资条件
  selectQualification(event) {
    this.setState({
      qualification: event.target.value
    });
  }

  agree(event) {
    this.setState({
      agree: !this.state.agree
    });
  }

  submit() {
    this.props.personalRegister({
      name: this.refs.name.value || '',
      id_card_number: this.refs.id_card_number.value || '',
      id_card_pic: '111',
      business_card: '222',
      type: this.state.memberType,
      condition: this.state.qualification || '',
    }).then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="register-container">
        <Helmet
          title="Personal"
          meta={[
            { name: 'description', content: 'Description of Personal' },
          ]}
        />
        <div className="register-personal-wrap">
          <h5 className="register-title">个人注册</h5>
          <div className="list-col">
            <div className="col-attr">
              真实姓名
            </div>
            <div className="col-value">
              <input type="text" className="price-input" ref='name'/>
            </div>
          </div>
          <div className="list-col">
            <div className="col-attr">
              身份证号
            </div>
            <div className="col-value">
              <input type="text" className="price-input" ref="id_card_number"/>
            </div>
          </div>

          <div className="list-col">
            <div className="col-attr">
              身份证扫描件
            </div>
            <div
              className={`col-value ${this.state.idcardloading ? 'uploading' : ''} ${this.state.idcardimg ? 'uploaded' : ''}`}>
              {
                this.state.idcardloading || this.state.idcardloaded ?
                  <div className="uploaded-pic"
                       style={this.state.idcardimg ? { backgroundImage: `url(${this.state.idcardimg})` } : {}}>
                    {
                      this.state.idcardloading ? <div className="upload-progress"
                                                  style={{ height: this.state.idcardprogress }}></div> : null
                    }
                  </div> : null
              }
              <UploadBtn {...this.uploadIdCardParams}>
                {
                  this.state.idcardimg ? '重新上传' : '点击上传'
                }
              </UploadBtn>
            </div>
          </div>
          <div className="list-col">
            <div className="col-attr">
              个人名片
            </div>
            <div
              className={`col-value ${this.state.businesscardloading ? 'uploading' : ''} ${this.state.businesscardimg ? 'uploaded' : ''}`}>
              {
                this.state.businesscardloading || this.state.businesscardloaded ?
                  <div className="uploaded-pic"
                       style={this.state.businesscardimg ? { backgroundImage: `url(${this.state.businesscardimg})` } : {}}>
                    {
                      this.state.businesscardloading ? <div className="upload-progress"
                                                  style={{ height: this.state.businesscardprogress }}></div> : null
                    }
                  </div> : null
              }
              <UploadBtn {...this.uploadBusinessCardParams}>
                {
                  this.state.businesscardimg ? '重新上传' : '点击上传'
                }
              </UploadBtn>
            </div>
          </div>

          <div className="list-col">
            <div className="col-attr">
              会员类型
            </div>
            <div className="col-value member-type">
              <section>
                <div
                  className={this.state.memberType === '1' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" checked={this.state.memberType === '1'}
                         name="memberType" onChange={this.selectType.bind(this)}
                         value="1" id="business"/>
                </div>
                <label htmlFor="business">
                  交易会员(普通投资会员)
                </label>
              </section>
              <section>
                <div
                  className={this.state.memberType === '2' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" checked={this.state.memberType === '2'}
                         name="memberType" onChange={this.selectType.bind(this)}
                         value="2" id="composite"/>
                </div>
                <label htmlFor="composite">
                  综合会员(持有影视初始份额的会员)
                </label>
              </section>
            </div>
          </div>

          <div className="list-col">
            <div className="col-attr">
              投资条件
            </div>
            <div className="col-value member-type qualification">
              <section>
                <div
                  className={this.state.qualification === '10' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio"
                         checked={this.state.qualification === '10'}
                         name="qualification"
                         onChange={this.selectQualification.bind(this)}
                         value="10"/>
                </div>
                <label htmlFor="business">
                  年收入超过50万元人民币
                </label>
              </section>
              <section>
                <div
                  className={this.state.qualification === '20' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio"
                         checked={this.state.qualification === '20'}
                         name="qualification"
                         onChange={this.selectQualification.bind(this)}
                         value="20"/>
                </div>
                <label htmlFor="composite">
                  金融资产超过200万元人民币
                </label>
              </section>
              <section>
                <div
                  className={this.state.qualification === '30' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio"
                         checked={this.state.qualification === '30'}
                         name="qualification"
                         onChange={this.selectQualification.bind(this)}
                         value="30"/>
                </div>
                <label htmlFor="composite">
                  具有三年以上的风险投资经验，或专业的文娱从业人员
                </label>
              </section>
            </div>
          </div>

          <div className="list-col">
            <div className="col-attr">
            </div>
            <div className="col-value">
              <div
                className={this.state.agree ? 'quote-radio checked' : 'quote-radio'}>
                <input type="radio" name="memberType"
                       onChange={this.agree.bind(this)} value="agree"
                       id="agree"/>
              </div>
              <label htmlFor="agree">
                同意《会员合同》《XXXX协议》
              </label>
            </div>
          </div>

          <Link to="" activeClassName="active"
                className={`next-btn ${this.state.agree ? '' : 'disabled'}`}
                onClick={this.submit.bind(this)}>下一步</Link>
        </div>
      </div>
    );
  }
}

Personal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const personal = state.personRegister;
  return {
    loading: personal.get('loading'),
    sucData: personal.get('sucData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    personalRegister: (params) => dispatch(actions.personalRegister(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
