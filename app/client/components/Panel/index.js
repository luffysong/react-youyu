/**
 * Panel
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

function Panel(props) {
  const { className, icon, children, title } = props;

  const classes = classnames([
    'panel-component',
    className,
  ]);

  return (
    <div className={classes}>
      <h4 className="panel-component-title">
        {
          icon
          ? <img src={icon} alt="" />
          : null
        }
        <span>
          {title}
        </span>
      </h4>
      <div className="panel-component-body">
        {children}
      </div>
    </div>
  );
}

Panel.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
};

export default Panel;
