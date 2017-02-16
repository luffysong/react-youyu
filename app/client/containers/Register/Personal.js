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
import { Field, reduxForm, change } from 'redux-form'
import * as actions from './actions';
import message from '../../components/Message';
import UploadBtn from  '../../components/UploadButton';

/**
 * Internal dependencies
 */
import './style.less';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.id_card_number) {
    errors.id_card_number = 'Required'
  } else if (values.id_card_number.length > 15) {
    errors.id_card_number = 'Must be 15 characters or less'
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
      // business card
      businesscardimg: '',
      businesscardloading: false,
      businesscardprogress: '',
      businesscardloaded: false,

      handleSubmit(cs) {
        console.log(cs, 'submit');
      },
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

    this.nameField = ({ input, label, type, meta: { touched, error, warning } }) => {
      return (
        <div>
          <input {...input} className="price-input" placeholder={label}
                 type={type} name="name"/>
          {touched && ((error && <span>{error}</span>) || (warning &&
          <span>{warning}</span>))}
        </div>
      );
    }

    this.idcardnumberField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <input {...input} className="price-input" placeholder={label}
               type={type} name="id_card_number"/>
        {touched && ((error && <span>{error}</span>) || (warning &&
        <span>{warning}</span>))}
      </div>
    );

    this.memberTypeField = () => {
      return (
        <div className="col-value member-type">
          <section>
            <div
              className={this.props.initialValues.type === 1 ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.props.initialValues.type === 1}
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
              className={this.props.initialValues.type === 2 ? 'quote-radio checked' : 'quote-radio'}>
              <input type="radio" checked={this.props.initialValues.type === 2}
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
            className={this.props.sendData.condition === 10 ? 'quote-radio checked' : 'quote-radio'}>
            <input type="radio"
                   checked={this.props.sendData.condition === 10}
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
            className={this.props.sendData.condition === 20 ? 'quote-radio checked' : 'quote-radio'}>
            <input type="radio"
                   checked={this.props.sendData.condition === 20}
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
            className={this.props.sendData.condition === 30 ? 'quote-radio checked' : 'quote-radio'}>
            <input type="radio"
                   checked={this.props.sendData.condition === 30}
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

    this.agreeField = ({ input, type, meta: { touched, error, warning } }) => {
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

  selectType(event) {
    this.props.dispatch(change('PersonalForm', 'type', event.target.value-0))

    // this.props.dispatch(actions.personalForm({
    //   type: event.target.value - 0,
    // }));
  }

  // 选择投资条件
  selectCondition(event) {
    this.props.dispatch(actions.personalForm({
      condition: event.target.value - 0,
    }));
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
          <form onSubmit={this.state.handleSubmit}>
            <h5 className="register-title">个人注册</h5>
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
              <div
                className={`col-value ${this.state.idcardloading ? 'uploading' : ''} ${this.state.idcardimg ? 'uploaded' : ''}`}>
                {
                  this.state.idcardloading || this.state.idcardloaded ?
                    <div className="uploaded-pic"
                         style={this.state.idcardimg ? { backgroundImage: `url(${this.state.idcardimg})` } : {}}>
                      {
                        this.state.idcardloading ?
                          <div className="upload-progress"
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
                        this.state.businesscardloading ?
                          <div className="upload-progress"
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
              <Field name="type" component={this.memberTypeField}/>
              {/*{this.memberTypeField()}*/}
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
              <Field name="agree"
                component={this.agreeField}/>
            </div>

            <button type="submit">Submit</button>
            <Link to="" activeClassName="active"
                  className={`next-btn ${this.state.agree ? '' : 'disabled'}`}
                  onClick={this.submit.bind(this)}>下一步</Link>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount(){
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
    initialValues: state.personalForm,
    sendData: state.personalForm
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
