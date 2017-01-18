/**
 * Announcements
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

function Announcements(props) {
  const { className } = props;
  const classes = classnames([
    'announcements-component',
    className,
  ]);

  return (
    <div className={classes}>
      <div className="announcements-inner">
        <img className="icon-announcements" src={require('./imgs/icon_notice_index.svg')} alt="公告" />
        <div className="announcements-item">
          <span className="indicator"></span>
          <span className="title">公告：</span>
          交易时间调整通知拍[11/10]
        </div>
        <div className="announcements-item">
          <span className="indicator"></span>
          <span className="title">公告：</span>
          交易时间调整通知拍[11/10]
        </div>
        <div className="announcements-item">
          <span className="indicator"></span>
          <span className="title">公告：</span>
          交易时间调整通知拍[11/10]
        </div>
        <div className="announcements-item">
          <span className="indicator"></span>
          <span className="title">公告：</span>
          交易时间调整通知拍[11/10]
        </div>
      </div>
    </div>
  );
}

Announcements.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Announcements;
