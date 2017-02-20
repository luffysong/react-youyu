/**
 * ProjectBanner
 */

/**
 * External dependencies
 */
import React from 'react';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import ProjectInfoBar from '../ProjectInfoBar';
import { numComma } from '../../utils/utils';
import { movie_stage } from '../../utils/dict.json';

function projectBannerLoading() {
  return(
    <div className="project-banner-component loading">
      <div className="project-banner-info clearfix">
        <div className="project-banner-cover loading">
        </div>
        <div className="project-banner-detail loading">
        </div>
      </div>
    </div>
  );
}

function getStage(stageText) {
  let stage = '';
  Object.keys(movie_stage).forEach(item => {
    if (movie_stage[item] === stageText) {
      stage = item;
    }
  });
  return stage;
}

function ProjectBanner(props) {
  const { loading, data } = props;

  if(loading) {
    return projectBannerLoading();
  }

  const projectInfo = [
    {
      name: '制片方',
      value: get(data, 'basic.producer'),
    },
    {
      name: '转让方',
      value: get(data, 'basic.transferor_count') + '人',
    },
    {
      name: '合计转让份额',
      value: get(data, 'basic.listing_share') * 100 + '%',
    },
    {
      name: '转让总价',
      value: numComma(get(data, 'basic.listing_price'), false, true),
    },
  ];

  return (
    <div className="project-banner-component">
      <div className="project-banner-info clearfix">
        <div className="project-banner-cover" style={{backgroundImage: `url(${get(data, 'basic.header_img')})`}}>
        </div>
        <div className="project-banner-detail">
          <div className="project-banner-detail-title-wrapper">
            <h3 className="project-banner-detail-title">
              {get(data, 'basic.name')}
            </h3>
            <span className="project-banner-detail-state-tag">
              <i className={`icon icon-stage-${getStage(get(data, 'basic.stage'))}`}></i>
              <span className="icon-tag">{get(data, 'basic.stage')}</span>
            </span>
          </div>
          <ul className="project-banner-detail-info">
            <li>导演: {get(data, 'basic.director')}</li>
            <li>编剧: {get(data, 'basic.scriptwriter')}</li>
            <li>主演: {get(data, 'basic.protagonist')}</li>
            <li>类型: {get(data, 'basic.type')}</li>
            <li>上映时间：{get(data, 'basic.release_date')}</li>
          </ul>
          <ProjectInfoBar data={projectInfo} className="project-banner-detail-info-bar" />
        </div>
      </div>
    </div>
  );
}

ProjectBanner.propTypes = {
  loading: React.PropTypes.bool,
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]).isRequired,
};

ProjectBanner.defaultProps = {
  loading: true,
  data: false,
};

export default ProjectBanner;
