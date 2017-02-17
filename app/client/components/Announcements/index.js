/**
 * Announcements
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
import { homeNoticeDate } from '../../utils/utils';

function Announcements(props) {
  const { className, data } = props;
  const classes = classnames([
    'announcements-component',
    className,
  ]);

  return (
    <div className={classes}>
      <div className="announcements-inner">
        <img className="icon-announcements" src={require('./imgs/icon_notice_index.svg')} alt="公告" />
        {
          data && data.map((item, index) => {
            if (index > 3) return null;
            return <div className="announcements-item" key={`item-${index}`}>
                      <span className="indicator"></span>
                      <span className="title">公告：</span>
                      <Link to={`/news/detail/${item.id}`}>
                        {item.title.substring(0, 8)}[{homeNoticeDate(item.published_at)}]
                      </Link>
                    </div>;
          })
        }
      </div>
    </div>
  );
}

Announcements.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Announcements;
