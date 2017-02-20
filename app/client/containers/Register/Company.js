/**
 * Register - Company
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change, touch } from 'redux-form'
import { get } from 'lodash';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import * as actions from './actions';
import UploadBtn from  '../../components/UploadButton';
import RegisterSuc from '../../components/RegisterSuc';
import message from '../../components/Message';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = '请输入企业全称'
  } else if (values.name.length > 15) {
    errors.name = '字数15个字以内'
  }
  if (!values.code) {
    errors.code = '请输入社会信用代码'
  }
  return errors
}

export class Company extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      agree: false,
      submitSuc: false
    };

    this.uploadParams = {
      success(data) {
        /*this.setState({
          uploadedImg: data
        });*/
        this.props.dispatch(change('companyForm', 'license_pic', data));
        this.setState({
          uploading: false,
          uploaded: true,
          licenseErr: ''
        });
      },
      progress(data) {
        this.setState({
          uploading: true,
          uploadProgress: `${data}%`
        });
      },
      error(msg) {
        this.setState({
          uploading: false,
        });
        message.error(msg);
      },
      params: {
        'image-width-range': '0, 3000'
      }
    };

    this.uploadParams.success = this.uploadParams.success.bind(this);
    this.uploadParams.progress = this.uploadParams.progress.bind(this);
    this.uploadParams.error = this.uploadParams.error.bind(this);

    this.nameField = ({ input, label, type, meta: { touched, error, warning } }) => {
      return (
        <div>
          <input {...input} className="price-input" placeholder={label}
                 type={type} name="name" />
          {touched && ((error && <span className="errmsg">{error}</span>) || (warning &&
          <span>{warning}</span>))}
        </div>
      );
    }

    this.codeField = ({ input, label, type, meta: { touched, error, warning } }) => {
      return (
        <div>
          <input {...input} className="price-input" placeholder={label}
                 type={type} name="orgCode" />
          {touched && ((error && <span className="errmsg">{error}</span>) || (warning &&
          <span>{warning}</span>))}
        </div>
      );
    }
  }

  selectType(event) {
    this.props.dispatch(change('companyForm', 'type', event.target.value - 0));
  }

  agree(event) {
    this.setState({
      agree: !this.state.agree
    });
  }

  submit() {
    if (!this.state.agree) {
      this.setState({
        formErr: '请先勾选同意相关协议'
      });
      setTimeout(() => {
        this.setState({
          formErr: '',
        })
      }, 2000);
      return;
    }
    this.props.dispatch(touch('companyForm', 'name', 'code', 'license_pic', 'type'));
    if(this.props.companyform.syncErrors) {
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
    if(!this.props.formData.license_pic) {
      this.setState({
        licenseErr: '请上传营业执照'
      });
      return;
    }
    this.props.orgRegister(this.props.formData).then(data => this.setState({submitSuc: true}))
      .catch(err => message.error(err));
  }

  render() {
    return (
      <div>
        <Helmet title="机构会员认证" />
        {
          this.state.submitSuc ? <RegisterSuc /> :
            <div className="register-company-container">
              <form onSubmit={this.submit}>
                <h5 className="register-title">机构会员认证</h5>
                <div className="list-col">
                  <div className="col-attr">
                    企业全称
                  </div>
                  <div className="col-value">
                    <Field className="price-input" name="name" type="text" component={this.nameField}/>
                  </div>
                </div>
                <div className="list-col">
                  <div className="col-attr">
                    社会信用代码
                  </div>
                  <div className="col-value">
                    <Field className="price-input" name="code" type="text" component={this.codeField}/>
                  </div>
                </div>

                <div className="list-col">
                  <div className={`col-attr ${this.state.uploading || this.state.uploaded ? 'ver-top' : ''}`}>
                    营业执照
                  </div>
                  <div className={`col-value ${this.state.uploading ? 'uploading' : ''} ${get(this.props.formData, 'license_pic') ? 'uploaded' : ''}`}>
                    {
                      this.state.uploading || this.state.uploaded ?
                        <div className="uploaded-pic" style={get(this.props.formData, 'license_pic') ? {backgroundImage: `url(${get(this.props.formData, 'license_pic')})`} : {}}>
                          {
                            this.state.uploading ? <div className="upload-progress" style={{height: this.state.uploadProgress}}></div> : null
                          }
                        </div> : null
                    }
                    <div className="uploader">
                      <UploadBtn {...this.uploadParams}>
                        {
                          get(this.props.formData, 'license_pic') ? '重新上传' : '点击上传'
                        }
                      </UploadBtn>
                      <span className="errmsg">{this.state.licenseErr}</span>
                    </div>
                  </div>
                </div>

                <div className="list-col">
                  <div className="col-attr">
                    会员类型
                  </div>
                  <div className="col-value member-type">
                    <section>
                      <div className={get(this.props.formData, 'type') === 1 ? 'quote-radio checked' : 'quote-radio'}>
                        <input type="radio" checked={get(this.props.formData, 'type') === 1} name="memberType" onChange={this.selectType.bind(this)} value="1" id="business" />
                      </div>
                      <label htmlFor="business">
                        交易会员(普通投资会员)
                      </label>
                    </section>
                    <section>
                      <div className={get(this.props.formData, 'type') === 2 ? 'quote-radio checked' : 'quote-radio'}>
                        <input type="radio" checked={get(this.props.formData, 'type') === 2} name="memberType" onChange={this.selectType.bind(this)} value="2" id="composite" />
                      </div>
                      <label htmlFor="composite">
                        综合会员(持有影视初始份额的会员)
                      </label>
                    </section>
                  </div>
                </div>

                <div className="list-col">
                  <div className="col-attr">
                  </div>
                  <div className="col-value">
                    <div className={this.state.agree ? 'quote-radio checked' : 'quote-radio'}>
                      <input type="radio" name="memberType" onChange={this.agree.bind(this)} value="agree" id="agree" />
                    </div>
                    <label htmlFor="agree">
                      同意《会员合同》《XXXX协议》
                    </label>
                  </div>
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
        }
      </div>
    );
  }
}

Company.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
  const company = state.register;
  const formState = state.form.companyForm;

  return {
    orgRegisterLoading: company.get('orgRegisterLoading'),
    orgRegisterData: company.get('orgRegisterData'),
    formData: get(formState, 'values'),
    companyform: formState,
    initialValues: state.companyForm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    orgRegister: (params) => dispatch(actions.orgRegister(params)),
    companyForm: (params) => dispatch(actions.companyForm(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'companyForm',
  validate,
})(Company));
