/**
 * LeftSideBar
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.less';

class LeftSideBar extends PureComponent {
  render() {
    const { className, children } = this.props;
    const classes = classnames([
      'left-side-bar-component',
      className,
    ]);
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

LeftSideBar.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default LeftSideBar;
