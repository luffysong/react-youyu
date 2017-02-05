/**
 * HelpMenu
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';

function HelpMenu() {
  return (
    <ul className="help-menu-component">
      <li className="help-menu-component-item">
        <Link to="/help/list" activeClassName="active">了解影视收益权投资</Link>
      </li>
      <li className="help-menu-component-item">
        <Link to="/help/detail" activeClassName="active">投资规则</Link>
      </li>
      <li className="help-menu-component-item">
        <Link to="/help/detail" activeClassName="active">会员制度</Link>
      </li>
      <li className="help-menu-component-item">
        <Link to="/help/detail" activeClassName="active">保证金规则</Link>
      </li>
      <li className="help-menu-component-item">
        <Link to="/help/detail" activeClassName="active">支付问题</Link>
      </li>
    </ul>
  );
}

HelpMenu.propTypes = {

};

export default HelpMenu;
