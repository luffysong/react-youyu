/**
 * ProjectBanner
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import './style.less';
import ProjectInfoBar from '../ProjectInfoBar';

function ProjectBanner() {
  const data = [
    {
      name: '制片方',
      value: '华纳影业',
    },
    {
      name: '转让方',
      value: '3人',
    },
    {
      name: '合计转让份额',
      value: '15%',
    },
    {
      name: '转让总价',
      value: '50,000,000元',
    },
  ];

  return (
    <div className="project-banner-component">
      <div className="project-banner-info clearfix">
        <div className="project-banner-cover" style={{backgroundImage: `url(${require('./imgs/cover.jpg')})`}}>
        </div>
        <div className="project-banner-detail">
          <div className="project-banner-detail-title-wrapper">
            <h3 className="project-banner-detail-title">
              疯狂动物城
            </h3>
            <span className="project-banner-detail-state-tag">
              <i className="icon icon-shooting"></i>拍摄制作期
            </span>
          </div>
          <ul className="project-banner-detail-info">
            <li>导演: 大卫·叶茨</li>
            <li>编剧: J·K·罗琳</li>
            <li>主演: 埃迪·雷德梅恩 / 凯瑟琳·沃特斯顿 / 丹·福勒 / 艾莉森·萨多尔 / 科林·法瑞尔</li>
            <li>类型: 剧情 / 奇幻 / 冒险</li>
            <li>上映时间：2016-11-23(中国大陆)</li>
          </ul>
          <ProjectInfoBar data={data}  className="project-banner-detail-info-bar" />
        </div>
      </div>
    </div>
  );
}

ProjectBanner.propTypes = {

};

export default ProjectBanner;
