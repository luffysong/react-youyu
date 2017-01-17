/**
 * Button
 */

/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.less';

function Button(props) {
  const classes = classnames([
    'button-component',
    props.className,
  ]);
  return (
    <a className={classes}>
      {props.children}
    </a>
  );
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

export default Button;
