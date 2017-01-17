/**
 * Header - Logo
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */

function Logo(props) {
  return (
    <div className={props.className}>
      <img src={require('./imgs/logo.svg')} alt="有娱投资" />
    </div>
  );
}

Logo.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Logo;
