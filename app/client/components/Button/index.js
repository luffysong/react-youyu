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
  const { to, disabled, size, bordered, onClick } = props;
  const classes = classnames([
    'button-component',
    {
      'button-component-width-link': to,
      'button-component-disabled': disabled,
      'button-component-bordered': bordered,
    },
    `button-component-${size}`,
    props.className,
  ]);
  return (
    <button className={classes} onClick={onClick}>
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
  size: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

Button.defaultProps = {
  to: '',
  size: 'normal',
  disabled: false,
  bordered: false,
  onClick: () => {}
};

export default Button;
