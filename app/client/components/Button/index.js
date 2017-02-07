/**
 * Button
 */

/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';

function Button(props) {
  const { to } = props;
  const classes = classnames([
    'button-component',
    {
      'button-component-width-link': to
    },
    props.className,
  ]);
  return (
    <button className={classes}>
      {
        to
        ? <Link to={to}>{props.children}</Link>
        : props.children
      }
    </button>
  );
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  to: React.PropTypes.string,
};

export default Button;
