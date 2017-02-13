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
        <RightMenu className="header-right-menu" loading={props.loading} data={props.data} />
      </section>
    </header>
  );
}

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool.isRequired,
    React.PropTypes.object.isRequired,
  ]),
};

export default Header;
