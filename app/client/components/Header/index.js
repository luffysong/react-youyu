/**
 * Header
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import './style.less';
import Logo from './Logo';
import Menu from './Menu';
import RightMenu from './RightMenu';

function Header(props) {
  return (
    <header className="header-component">
      <section className="header-inner">
        <Logo className="header-logo" />
        <Menu className="header-menu" />
        <RightMenu className="header-right-menu">
          {props.children}
        </RightMenu>
      </section>
    </header>
  );
}

Header.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Header;
