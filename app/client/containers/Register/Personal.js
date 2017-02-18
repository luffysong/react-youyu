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
  if (!values.id_card_number) {
    errors.id_card_number = '请输入身份证号'
  } else if (values.id_card_number.length < 8) {
    errors.id_card_number = '请输入有效位数'
  }
  if (!values.idcardimg) {
    errors.idcardimg = '请上传身份证复印件'
  }
  if (!values.businesscardimg) {
    errors.businesscardimg = '请上传名片复印件'
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
      idcardimg: '',
      idcardloading: false,
      idcardprogress: '',
      idcardloaded: false,
      idcarderr: '',
      // business card
      businesscardimg: '',
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
        this.props.dispatch(change('PersonalForm', 'idcardimg', data))
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
        'image-width-range': '0, 3000'
      }
    };

    this.uploadBusinessCardParams = {
      success: (data) => {
        this.props.dispatch(change('PersonalForm', 'businesscardimg', data))
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
        'image-width-range': '0, 3000'
      }
    };

    this.nameField = ({ input, label, type, meta: { touched, error, warning } }) => {
      return (
        <div>
          <input {...input} className="price-input" placeholder={label}
                 type={type} name="name"/>
          {touched && ((error && <span className="errmsg">{error}</span>) || (warning &&
          <span>{warning}</span>))}
        </div>
      );
    }

    this.idcardnumberField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <input {...input} className="price-input" placeholder={label}
               type={type} name="id_card_number"/>
        {touched && ((error && <span className="errmsg">{error}</span>) || (warning &&
        <span>{warning}</span>))}
      </div>
    );

    this.idcardpic = ({input, ...state}) => {
      return (
        <div className={`col-value ${state.idcardloading ? 'uploading' : ''} ${input.value ? 'uploaded' : ''}`}>
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
            { state.meta.touched && (state.meta.error && <span className="errmsg">{state.meta.error}</span>)}
          </div>

        </div>
      )
    };

    this.businesscardpic = ({input, ...state}) => (
      <div className={`col-value ${state.businesscardloading ? 'uploading' : ''} ${input.value ? 'uploaded' : ''}`}>
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
    this.props.dispatch(touch('PersonalForm', 'name', 'id_card_number', 'idcardimg', 'businesscardimg'))
    console.log(!this.props.personform.syncErrors);
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
              <Field name="idcardimg" {...this.state} component={this.idcardpic}/>
            </div>
            <div className="list-col">
              <div className="col-attr">
                个人名片
              </div>
              <Field name="businesscardimg" {...this.state} component={this.businesscardpic}/>
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
                      disabled={this.state.agree ? '' : 'disabled'}
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
    const memberType = get(this.props.userinfo, 'data.info.member_type');
    const memberStatus = get(this.props.userinfo, 'data.info.operation_steps.member_status');
    if(memberType === 1) {

    } else if (memberType === 2) {

    }
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
