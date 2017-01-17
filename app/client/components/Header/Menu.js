/**
 * Header - Menu
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */

function Menu(props) {
  return (
    <ul className={props.className}>
      <li className="item">
        <Link to="/" activeClassName="active">首页</Link>
      </li>
      <li className="item">
        <Link to="/news" activeClassName="active">新闻公告</Link>
      </li>
      <li className="item">
        <Link to="/class" activeClassName="active">新人指南</Link>
      </li>
      <li className="item">
        <Link to="/help" activeClassName="active">帮助中心</Link>
      </li>
      <li className="item">
        <Link to="/about" activeClassName="active">关于我们</Link>
      </li>
    </ul>
  );
}

Menu.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Menu;
