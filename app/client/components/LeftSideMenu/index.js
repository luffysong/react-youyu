/**
 * LeftSideMenu
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

function LeftSideMenu(props) {
  const { links } = props;

  return (
    <ul className="left-side-menu-component">
      {
        links && links.length && links.map((item, index) => {
          return <li className="left-side-menu-component-item" key={`left-side-menu-component-item-${index}`}>
            <Link to={item.link} activeClassName="active">{item.text}</Link>
          </li>
        })
      }
    </ul>
  );
}

LeftSideMenu.propTypes = {
  links: React.PropTypes.array.isRequired,
};

export default LeftSideMenu;
