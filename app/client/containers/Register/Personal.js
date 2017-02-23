/**
 * Personal Register
 */

/**
 * External dependencies
 */
/* eslint-disable */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import { Field, reduxForm, change, touch } from 'redux-form'
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import * as actions from './actions';
import message from '../../components/Message';
import UploadBtn from  '../../components/UploadButton';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = '请输入真实姓名'
  } else if (values.name.length > 15) {
    errors.name = '字数15个字以内'
  }
  const idReg = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/;
  if (!values.id_card_number) {
    errors.id_card_number = '请输入身份证号'
  } else if (!idReg.test(values.id_card_number)) {
    errors.id_card_number = '请输入有效号码'
  }
  if (!values.id_card_pic) {
    errors.id_card_pic = '请上传身份证复印件'
  }
  if (!values.business_card) {
    errors.business_card = '请上传名片复印件'
  }
  return errors
}

export class Personal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: '1',
      qualification: '10',
      agree: false,
      // id card
      idcardloading: false,
      idcardprogress: '',
      idcardloaded: false,
      idcarderr: '',
      // business card
      businesscardloading: false,
      businesscardprogress: '',
      businesscardloaded: false,
      businesscarderr: '',

      handleSubmit(cs) {
        console.log(cs, 'submit');
      },
    };

    this.uploadIdCardParams = {
      success: (data) => {
        this.props.dispatch(change('PersonalForm', 'id_card_pic', data))
        this.setState({
          idcardloading: 0,
          idcardloaded: true,
          idcarderr: '',
        });
      },
      progress: (data) => {
        this.setState({
          idcardloading: 1,
          idcardprogress: `${data}%`
        });
      },
      error: (msg) => {
        this.setState({
          idcardloading: 0,
        });
        console.log(msg);
        message.error(msg);
      },
      params: {
        'image-width-range': '0, 5000'
      }
    };

    this.uploadBusinessCardParams = {
      success: (data) => {
        this.props.dispatch(change('PersonalForm', 'business_card', data))
        this.setState({
          businesscardloading: 0,
          businesscardloaded: true,
          businesscarderr: '',
        });
      },
      progress: (data) => {
        this.setState({
          businesscardloading: 1,
          businesscardprogress: `${data}%`
        });
      },
      error: (msg) => {
        this.setState({
          businesscardloading: 0,
        });
        message.error(msg);
      },
      params: {
        'image-width-range': '0, 5000'
      }
    };

    this.nameField = ({ input, label, type, meta: { touched, error, warning} }) => {
      return (
        <div>
          <input {...input} className={touched && error ? 'error price-input' : 'price-input'} placeholder={label}
                 type={type} name="name"/>
          {
            touched &&
            (
              (error && <span className="errmsg">{error}</span>) ||
              (warning && <span>{warning}</span>) ||
              (<span><img src={require('./imgs/icon_correct.svg')} alt=""/></span>)
            )
          }
        </div>
      );
    }

    this.idcardnumberField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <input {...input} className={touched && error ? 'error price-input' : 'price-input'} placeholder={label}
               type={type} name="id_card_number"/>
        {touched && ((error && <span className="errmsg">{error}</span>) ||
        (warning &&<span>{warning}</span>) ||
        (<span><img src={require('./imgs/icon_correct.svg')} alt=""/></span>))}
      </div>
    );

    this.idcardpic = ({input, ...state}) => {
      console.log(input);
      return (
        <div className={`col-value verticaltop ${state.idcardloading ? 'uploading' : ''} ${input.value ? 'uploaded' : ''}`}>
          {
            state.idcardloading || state.idcardloaded ?
              <div className="uploaded-pic"
                   style={input.value ? { backgroundImage: `url(${input.value})` } : {}}>
                {
                  state.idcardloading ?
                    <div className="upload-progress"
                         style={{ height: state.idcardprogress }}></div> : null
                }
              </div> : null
          }
          <div className="uploader">
            <UploadBtn {...this.uploadIdCardParams}>
              {
                input.value ? '重新上传' : '点击上传'
              }
            </UploadBtn>
            {
              state.meta.touched &&
              (state.meta.error && <span className="errmsg">{state.meta.error}</span>)
            }
          </div>
          <p className="upload-desc">文件格式：jpg,jpeg,png,gif，小于5MB</p>

        </div>
      )
    };

    this.businesscardpic = ({input, ...state}) => (
      <div className={`col-value verticaltop ${state.businesscardloading ? 'uploading' : ''} ${input.value ? 'uploaded' : ''}`}>
        {
          state.businesscardloading || state.businesscardloaded ?
            <div className="uploaded-pic"
                 style={input.value ? { backgroundImage: `url(${input.value})` } : {}}>
              {
                state.businesscardloading ?
                  <div className="upload-progress"
                       style={{ height: state.businesscardprogress }}></div> : null
              }
            </div> : null
        }
        <div className="uploader">
          <UploadBtn {...this.uploadBusinessCardParams}>
            {
              input.value ? '重新上传' : '点击上传'
            }
          </UploadBtn>
          { state.meta.touched && (state.meta.error && <span className="errmsg">{state.meta.error}</span>)}
        </div>
        <p className="upload-desc">文件格式：jpg,jpeg,png,gif，小于5MB</p>
      </div>
    );

    this.memberTypeField = () => {
      return (
        <div className="col-value member-type">
          <section>
            <div
              className={get(this.props.formData, 'type') === 1 ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio"
                     checked={get(this.props.formData, 'type') === 1}
                     name="type"
                     onChange={this.selectType.bind(this)}
                     value="1" id="business"/>
            </div>
            <label htmlFor="business">
              交易会员(普通投资会员)
            </label>
          </section>
          <section>
            <div
              className={get(this.props.formData, 'type') === 2 ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio"
                     checked={get(this.props.formData, 'type') === 2}
                     name="type"
                     onChange={this.selectType.bind(this)}
                     value="2" id="composite"/>
            </div>
            <label htmlFor="composite">
              综合会员(持有影视初始份额的会员)
            </label>
          </section>
        </div>
      )
    };

    this.conditionField = () => (
      <div className="col-value member-type qualification">
        <section>
          <div
            className={get(this.props.formData, 'condition') === 10 ? 'quote-radio checked' : 'quote-radio'}>
            <input type="radio"
                   checked={get(this.props.formData, 'condition') === 10}
                   name="condition"
                   onChange={this.selectCondition.bind(this)}
                   value="10" id="up50w"/>
          </div>
          <label htmlFor="up50w">
            年收入超过50万元人民币
          </label>
        </section>
        <section>
          <div
            className={get(this.props.formData, 'condition') === 20 ? 'quote-radio checked' : 'quote-radio'}>
            <input type="radio"
                   checked={get(this.props.formData, 'condition') === 20}
                   name="condition"
                   onChange={this.selectCondition.bind(this)}
                   value="20" id="up200w"/>
          </div>
          <label htmlFor="up200w">
            金融资产超过200万元人民币
          </label>
        </section>
        <section>
          <div
            className={get(this.props.formData, 'condition') === 30 ? 'quote-radio checked' : 'quote-radio'}>
            <input type="radio"
                   checked={get(this.props.formData, 'condition') === 30}
                   name="condition"
                   onChange={this.selectCondition.bind(this)}
                   value="30" id="profession"/>
          </div>
          <label htmlFor="profession">
            具有三年以上的风险投资经验，或专业的文娱从业人员
          </label>
        </section>
      </div>
    )

    this.agreeField = () => {
      return (
        <div className="col-value">
          <span>{this.state.agree}</span>
          <div
            className={this.state.agree ? 'quote-radio checked' : 'quote-radio'}>
            <input type="radio" name="agree"
                   onChange={this.agree.bind(this)} value="agree"
                   id="agree"/>
          </div>
          <label htmlFor="agree">
            同意《会员合同》《XXXX协议》
          </label>
        </div>
      )
    }
  }

  // 选择会员类型
  selectType(event) {
    this.props.dispatch(change('PersonalForm', 'type', event.target.value - 0))
  }

  // 选择投资条件
  selectCondition(event) {
    this.props.dispatch(change('PersonalForm', 'condition', event.target.value - 0))
  }

  agree(event) {
    this.setState({
      agree: !this.state.agree
    });
  }

  submit() {
    this.props.dispatch(touch('PersonalForm', 'name', 'id_card_number', 'id_card_pic', 'business_card'))
    if(!this.state.agree) {
      this.setState({
        formErr: '请填写表单并阅读协议，同意协议内容才能提交。',
      }, ()=>{
        setTimeout(() => {
          this.setState({
            formErr: '',
          })
        }, 4000);
      })
      return;
    }

    if(this.props.personform.syncErrors) {
      this.setState({
        formErr: '表单填写不完整，请检查'
      }, ()=>{
        setTimeout(() => {
          this.setState({
            formErr: '',
          })
        }, 3000);
      })
      return;
    }
    this.props.personalRegister({
      sendData: this.props.formData,
      callback: () => {
        browserHistory.push('/register/personalresult');
      },
    });
  }

  render() {
    return (
      <div className="register-container">
        <Helmet title="个人会员认证" />
        <div className="register-personal-wrap">
          <form onSubmit={this.state.handleSubmit}>
            <h5 className="register-title">个人会员认证</h5>
            <div className="list-col">
              <div className="col-attr">
                真实姓名
              </div>
              <div className="col-value">
                <Field className="price-input" name="name"
                       type="text" component={this.nameField}/>
              </div>
            </div>
            <div className="list-col">
              <div className="col-attr">
                身份证号
              </div>
              <div className="col-value">
                <Field className="price-input" name="id_card_number"
                       type="text" component={this.idcardnumberField}/>
              </div>
            </div>

            <div className="list-col">
              <div className="col-attr">
                身份证扫描件
              </div>
              <Field name="id_card_pic" {...this.state} component={this.idcardpic}/>
            </div>
            <div className="list-col">
              <div className="col-attr">
                个人名片
              </div>
              <Field name="business_card" {...this.state} component={this.businesscardpic}/>
            </div>

            <div className="list-col">
              <div className="col-attr">
                会员类型
              </div>
              {this.memberTypeField()}
            </div>

            <div className="list-col">
              <div className="col-attr">
                投资条件
              </div>
              {this.conditionField()}
            </div>

            <div className="list-col">
              <div className="col-attr">
              </div>
              {this.agreeField()}
            </div>

            <div className="button-wrap">
              <button type="button"
                      className={`next-btn ${this.state.agree ? 'active' : ''}`}
                      onClick={this.submit.bind(this)}>下一步</button>
              {
                (this.state.formErr) ?
                  <span className="errmsg">{this.state.formErr}</span> : ''
              }
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentWillMount() {
  }
}

Personal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const personal = state.personRegister;
  const formState = state.form.PersonalForm;
  return {
    loading: personal.get('loading'),
    sucData: personal.get('sucData'),
    personform: formState,
    formData: get(formState, 'values'),
    initialValues: state.personalForm,
    userinfo: state.layout.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    personalRegister: (params) => dispatch(actions.personalRegister(params)),
    personalForm: (params) => dispatch(actions.personalForm(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'PersonalForm',
  validate,
})(Personal));
