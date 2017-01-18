/**
 * Footer - Menu
 */

/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */

function Menu(props) {
  const classes = classnames([
    props.className,
    'clearfix',
  ]);

  return (
    <ul className={classes}>
      <li className="item">
        <Link to="/about">
          <img src={require('./imgs/icon_about_footer.svg')} alt="关于我们"></img>
          关于我们
        </Link>
      </li>
      <li className="item">
        <Link to="/class">
          <img src={require('./imgs/icon_new_footer.svg')} alt="新人课堂"></img>
          新人课堂
        </Link>
      </li>
      <li className="item">
        <Link to="/help">
          <img src={require('./imgs/icon_FAQ_footer.svg')} alt="常见问题"></img>
          常见问题
        </Link>
      </li>
    </ul>
  );
}

Menu.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Menu;
