/**
 * Register - Company
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';
import * as actions from './actions';

export class Company extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      memberType: '1',
      agree: true
    };
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
       license_pic: '',
       type: this.state.memberType
    }).then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
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
          <div className="col-attr">
            营业执照
          </div>
          <div className="col-value">
            <span className="upload-btn">
              点击上传
              <input type="file"/>
            </span>
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
    );
  }
}

Company.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
  const company = state.register;

  return {
    orgRegisterLoading: company.get('orgRegisterLoading'),
    orgRegisterData: company.get('orgRegisterData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    orgRegister: (params) => dispatch(actions.orgRegister(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
