/**
 * NewsItem
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';

function NewsItem() {
  return (
    <Link to="/news/detail" className="news-item-component">
      <div className="news-item-title-wrapper">
        <h3 className="news-item-title">氪空间体验之FIR.im：这是我最开始的地方，以后我会记住这里的</h3>
        <span className="news-item-time">2015年6月30日</span>
      </div>
      <div className="news-item-desc">
        当我成为氪空间第一个入驻者（这个时候还不能称之为团队），看着这近1000平的大开放空间，没有想着“我要成功”，“我要当CEO了”，我想的很简单：“这是我开始的地方，以后我会记住这里的”。
      </div>
    </Link>
  );
}

NewsItem.propTypes = {

};

export default NewsItem;
