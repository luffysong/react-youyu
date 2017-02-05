/**
 * HelpListItems
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

function HelpListItems() {
  return (
    <ul className="help-list-items-component">
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
      <li className="help-list-items-component-item">
        <Link to="/help/detail">投资流程是什么样的？</Link>
      </li>
    </ul>
  );
}

HelpListItems.propTypes = {

};

export default HelpListItems;
