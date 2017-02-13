/**
 * Header - RightMenu
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';

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

function RightMenu(props) {
  return (
    <div className={props.className}>
      <div className="button-wrapper">
        <Button className="btn-quick-register" to="/register">快速开户</Button>
      </div>
      <div className="option-area">
        <a className="login-link" onClick={login}>登陆</a>
        <div className="split"></div>
        <Link className="login-link" to="/register">注册</Link>
      </div>
    </div>
  );
}

RightMenu.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default RightMenu;
