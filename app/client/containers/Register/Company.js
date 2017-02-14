/**
 * Register - Company
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import message from '../../components/Message';

/**
 * Internal dependencies
 */
import './style.less';
import * as actions from './actions';
import UploadBtn from  '../../components/UploadButton';
import RegisterSuc from '../../components/RegisterSuc';



export class Company extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      memberType: '1',
      agree: true,
      submitSuc: false
    };

    this.uploadParams = {
      success(data) {
        this.setState({
          uploadedImg: data
        });
        this.setState({
          uploading: false,
          uploaded: true
        });
        console.log(data, 'suc');
      },
      progress(data) {
        this.setState({
          uploading: true,
          uploadProgress: `${data}%`
        });
        console.log(data, 'pro');
      },
      error(msg) {
        this.setState({
          uploading: false,
        });
        console.log(msg);
        message.error(msg);
      },
      params: {
        'image-width-range': '0, 3000'
      }
    };

    this.uploadParams.success = this.uploadParams.success.bind(this);
    this.uploadParams.progress = this.uploadParams.progress.bind(this);
    this.uploadParams.error = this.uploadParams.error.bind(this);
  }

  selectType(event) {
    this.setState({
      memberType: event.target.value
    });
  }

  agree(event) {
    this.setState({
      agree: !this.state.agree
    });
  }

  submit() {
    this.props.orgRegister({
       name: this.refs.orgName.value || '',
       code: this.refs.orgCode.value || '',
       license_pic: this.state.uploadedImg,
       type: this.state.memberType
    }).then(data => this.setState({submitSuc: true}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {
          this.state.submitSuc ? <RegisterSuc /> :
            <div className="register-company-container">
              <h5 className="register-title">企业注册</h5>
              <div className="list-col">
                <div className="col-attr">
                  企业全称
                </div>
                <div className="col-value">
                  <input type="text" className="price-input" ref='orgName' />
                </div>
              </div>
              <div className="list-col">
                <div className="col-attr">
                  社会信用代码
                </div>
                <div className="col-value">
                  <input type="text" className="price-input" ref="orgCode" />
                </div>
              </div>

              <div className="list-col">
                <div className={`col-attr ${this.state.uploading || this.state.uploaded ? 'ver-top' : ''}`}>
                  营业执照
                </div>
                <div className={`col-value ${this.state.uploading ? 'uploading' : ''} ${this.state.uploadedImg ? 'uploaded' : ''}`}>
                  {
                    this.state.uploading || this.state.uploaded ?
                      <div className="uploaded-pic" style={this.state.uploadedImg ? {backgroundImage: `url(${this.state.uploadedImg})`} : {}}>
                        {
                          this.state.uploading ? <div className="upload-progress" style={{height: this.state.uploadProgress}}></div> : null
                        }
                      </div> : null
                  }
                  <UploadBtn {...this.uploadParams}>
                    {
                      this.state.uploadedImg ? '重新上传' : '点击上传'
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
                    <div className={this.state.memberType === '1' ? 'quote-radio checked' : 'quote-radio'}>
                      <input type="radio" checked={this.state.memberType === '1'} name="memberType" onChange={this.selectType.bind(this)} value="1" id="business" />
                    </div>
                    <label htmlFor="business">
                      交易会员(普通投资会员)
                    </label>
                  </section>
                  <section>
                    <div className={this.state.memberType === '2' ? 'quote-radio checked' : 'quote-radio'}>
                      <input type="radio" checked={this.state.memberType === '2'} name="memberType" onChange={this.selectType.bind(this)} value="2" id="composite" />
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

              <Link to="" activeClassName="active" className={`next-btn ${this.state.agree ? '' : 'disabled'}`} onClick={this.submit.bind(this)}>下一步</Link>
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
  const personal = state.personRegister;

  return {
    orgRegisterLoading: company.get('orgRegisterLoading'),
    orgRegisterData: company.get('orgRegisterData'),
    personalRegisterLoading: personal.get('loading'),
    personalRegisterData: personal.get('sucData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    orgRegister: (params) => dispatch(actions.orgRegister(params)),
    personalRegister: (params) => dispatch(actions.personalRegister(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
