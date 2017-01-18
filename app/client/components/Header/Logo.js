/**
 * Header - Logo
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */

function Logo(props) {
  return (
    <Link className={props.className} to="/">
      <img src={require('./imgs/logo.svg')} alt="有娱投资" />
    </Link>
  );
}

Logo.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Logo;
