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

function Header() {
  return (
    <header className="header-component">
      <section className="header-inner">
        <Logo className="header-logo" />
        <Menu className="header-menu" />
      </section>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
