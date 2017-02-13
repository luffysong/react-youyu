/**
 * Header - RightMenu
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';

/**
 * Internal dependencies
 */
import Button from '../Button';
import config from '../../config';
import { isLogin } from '../../utils/user';

class RightMenu extends PureComponent {
  login(e) {
    e.preventDefault();
    const backUrl = encodeURIComponent(location.href);
    location.href = `${config.apiBase}/passport/login?from=${backUrl}`;
  }

  register(e) {
    e.preventDefault();
    const backUrl = encodeURIComponent(location.href);
    location.href = `${config.apiBase}/passport/register?ok_url=${backUrl}`;
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={className}>
        <div className="button-wrapper">
          <Button className="btn-quick-register" to="/register">快速开户</Button>
        </div>
        {
          isLogin()
          ?
            children
          :
            <div className="option-area">
              <a className="login-link" onClick={this.login}>登陆</a>
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
  children: React.PropTypes.node,
};

export default RightMenu;
