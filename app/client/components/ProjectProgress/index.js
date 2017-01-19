/**
 * ProjectProgress
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import './style.less';

function ProjectProgress() {
  return (
    <div className="project-progress-component">
      <ul className="project-progress-list">
        <li className="project-progress-list-item">
          <div className="project-progress-list-item-time">
            2017-01-12
          </div>
          <div className="project-progress-list-item-title">
            将于2017年1月12日开机。
          </div>
        </li>
        <li className="project-progress-list-item">
          <div className="project-progress-list-item-time">
            2017-12-26
          </div>
          <div className="project-progress-list-item-title">
            2017年1月10日在北京正式开机。
          </div>
        </li>
        <li className="project-progress-list-item">
          <div className="project-progress-list-item-time">
            2016-12-01
          </div>
          <div className="project-progress-list-item-title">
            拍摄杀青，进入后期制作阶段。
          </div>
        </li>
        <li className="project-progress-list-item">
          <div className="project-progress-list-item-time">
            2016-11-13
          </div>
          <div className="project-progress-list-item-title">
            进入剪辑阶段。
          </div>
        </li>
      </ul>
    </div>
  );
}

ProjectProgress.propTypes = {

};

export default ProjectProgress;
