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

function RightMenu(props) {
  return (
    <div className={props.className}>
      <div className="button-wrapper">
        <Button className="btn-quick-register">快速开户</Button>
      </div>
      <div className="option-area">
        <a className="login-link" href="">登陆</a>
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
