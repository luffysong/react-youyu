/**
 * Header - RightMenu
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Button from '../Button';
import config from '../../config';

function login(e) {
  e.preventDefault();
  const backUrl = encodeURIComponent(location.href);
  location.href = `${config.apiBase}/passport/login?from=${backUrl}`;
}

function register(e) {
  e.preventDefault();
  const backUrl = encodeURIComponent(location.href);
  location.href = `${config.apiBase}/passport/register?ok_url=${backUrl}`;
}

function RightMenu(props) {
  return (
    <div className={props.className}>
      <div className="button-wrapper">
        <Button className="btn-quick-register" to="/register">快速开户</Button>
      </div>
      <div className="option-area">
        <a className="login-link" onClick={login}>登陆</a>
        <div className="split"></div>
        <a className="login-link" onClick={register}>注册</a>
      </div>
    </div>
  );
}

RightMenu.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default RightMenu;
