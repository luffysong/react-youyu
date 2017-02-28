/**
 * Footer
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import Menu from './Menu';
import CopyRight from './CopyRight';
import ContactInfo from './ContactInfo';

function Footer(props) {
  const { data } = props;

  return (
    <footer className="footer-component">
      <section className="footer-inner clearfix">
        <Link className="footer-logo" to="/">
          <img src={require('./imgs/logo_footer.svg')} alt=""></img>
        </Link>
        <div className="footer-hidden">{get(data, 'info.id')}</div>
        <Menu className="footer-menu" />
        <ContactInfo className="contact-info" />
      </section>
      <CopyRight />
    </footer>
  );
}

Footer.propTypes = {
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool.isRequired,
    React.PropTypes.object.isRequired,
  ]),
};

export default Footer;
