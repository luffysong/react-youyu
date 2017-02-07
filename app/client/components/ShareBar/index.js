/**
 * ShareBar
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

function ShareBar(props) {
  const { className } = props;
  const classes = classnames([
    'share-bar-component',
    className,
  ]);
  return (
    <div className={classes}>
      <span>分享到</span>
      <div className="icon-weixin"></div>
      <div className="icon-weibo"></div>
    </div>
  );
}

ShareBar.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default ShareBar;
