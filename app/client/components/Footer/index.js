/**
 * Footer
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
import Menu from './Menu';
import CopyRight from './CopyRight';
import ContactInfo from './ContactInfo';

function Footer() {
  return (
    <footer className="footer-component">
      <section className="footer-inner clearfix">
        <Link className="footer-logo" to="/">
          <img src={require('./imgs/logo_footer.svg')} alt=""></img>
        </Link>
        <Menu className="footer-menu" />
        <ContactInfo className="contact-info" />
      </section>
      <CopyRight />
    </footer>
  );
}

Footer.propTypes = {

};

export default Footer;
