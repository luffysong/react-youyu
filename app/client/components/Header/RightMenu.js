/**
 * Header - RightMenu
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import Button from '../Button';
import UserInfo from '../UserInfo';
import { isLogin, goToLogin, goToRegister } from '../../utils/user';

class RightMenu extends PureComponent {
  login(e) {
    e.preventDefault();
    goToLogin();
  }

  register(e) {
    e.preventDefault();
    goToRegister();
  }

  render() {
    const { className, loading, data } = this.props;

    return (
      <div className={className}>
        {
          isLogin() && (loading || get(data, 'info.member_type'))
          ? null
          : <div className="button-wrapper">
              <Button className="btn-quick-register" to="/register">快速开户</Button>
            </div>
        }
        {
          isLogin()
          ? <UserInfo loading={loading} data={data} />
          :
            <div className="option-area">
              <a className="login-link" onClick={this.login}>登录</a>
              <div className="split"></div>
              <a className="login-link" onClick={this.register}>注册</a>
            </div>
        }
      </div>
    );
  }
}

RightMenu.propTypes = {
  className: React.PropTypes.string.isRequired,
  loading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool.isRequired,
    React.PropTypes.object.isRequired,
  ]),
};

export default RightMenu;
