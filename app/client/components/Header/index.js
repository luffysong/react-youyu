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

function Header() {
  return (
    <header className="header-component">
      <section className="header-inner">
        <Logo className="header-logo" />
      </section>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
