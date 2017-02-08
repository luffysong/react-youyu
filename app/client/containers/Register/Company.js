/**
 * Register - Company
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';
import makeSelectRegister from './selectors';

export class Company extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      memberType: 'business',
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

  render() {
    return (
      <div className="register-company-container">
        <h5 className="register-title">企业注册</h5>
        <div className="list-col">
          <div className="col-attr">
            企业全称
          </div>
          <div className="col-value">
            <input type="text" className="price-input" />
          </div>
        </div>
        <div className="list-col">
          <div className="col-attr">
            社会信用代码
          </div>
          <div className="col-value">
            <input type="text" className="price-input" />
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
              <div className={this.state.memberType === 'business' ? 'quote-radio checked' : 'quote-radio'}>
                <input type="radio" checked={this.state.memberType === 'business'} name="memberType" onChange={this.selectType.bind(this)} value="business" id="business" />
              </div>
              <label htmlFor="business">
                交易会员(普通投资会员)
              </label>
            </section>
            <section>
              <div className={this.state.memberType === 'composite' ? 'quote-radio checked' : 'quote-radio'}>
                <input type="radio" checked={this.state.memberType === 'composite'} name="memberType" onChange={this.selectType.bind(this)} value="composite" id="composite" />
              </div>
              <label htmlFor="hide">
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
              <input type="radio" checked={this.state.agree} name="memberType" onChange={this.agree.bind(this)} value="agree" id="agree" />
            </div>
            <label htmlFor="agree">
              同意《会员合同》《XXXX协议》
            </label>
          </div>
        </div>

        <Link to="/quote/initial/2" activeClassName="active" className="next-btn">下一步</Link>
      </div>
    );
  }
}

Company.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
