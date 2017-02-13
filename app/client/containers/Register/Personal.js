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

/**
 * Internal dependencies
 */
import './style.less';

export class Personal extends PureComponent {
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
              <input type="text" className="price-input" ref='realName' />
            </div>
          </div>
          <div className="list-col">
            <div className="col-attr">
              身份证号
            </div>
            <div className="col-value">
              <input type="text" className="price-input" ref="personID" />
            </div>
          </div>

          <div className="list-col">
            <div className="col-attr">
              身份证扫描件
            </div>
            <div className="col-value">
            <span className="upload-btn">
              点击上传
            </span>
            </div>
          </div>
          <div className="list-col">
            <div className="col-attr">
              个人名片
            </div>
            <div className="col-value">
            <span className="upload-btn">
              点击上传
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
              投资条件
            </div>
            <div className="col-value member-type">
              <section>
                <div className={this.state.memberType === '1' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" checked={this.state.memberType === '1'} name="memberType" onChange={this.selectType.bind(this)} value="1" id="business" />
                </div>
                <label htmlFor="business">
                  年收入超过50万元人民币
                </label>
              </section>
              <section>
                <div className={this.state.memberType === '2' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" checked={this.state.memberType === '2'} name="memberType" onChange={this.selectType.bind(this)} value="2" id="composite" />
                </div>
                <label htmlFor="composite">
                  金融资产超过200万元人民币
                </label>
              </section>
              <section>
                <div className={this.state.memberType === '2' ? 'quote-radio checked' : 'quote-radio'}>
                  <input type="radio" checked={this.state.memberType === '2'} name="memberType" onChange={this.selectType.bind(this)} value="2" id="composite" />
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
      </div>
    );
  }
}

Personal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
