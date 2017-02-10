/**
 * ProjectProgress
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

function ProjectProgress(props) {
  const { data } = props;
  if (!data || !data.length) {
    return null;
  }
  return (
    <div className="project-progress-component">
      <ul className="project-progress-list">
        {
          data.map((item, index) => {
            return <li className="project-progress-list-item" key={`project-progress-list-item-${index}`}>
              <div className="project-progress-list-item-time">
                {get(item, 'date')}
              </div>
              <div className="project-progress-list-item-title">
                {get(item, 'content')}
              </div>
            </li>
          })
        }
      </ul>
    </div>
  );
}

ProjectProgress.propTypes = {
  data: React.PropTypes.array,
};

export default ProjectProgress;
