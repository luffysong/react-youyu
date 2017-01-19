/**
 * ProjectInfoBar
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

function ProjectInfoBar(props) {
  const { data, className } = props;
  const classes = classnames([
    'project-info-bar-component',
    className,
  ]);

  return (
    <ul className={classes}>
      {
        data && data.length && data.map(item =>
          <li className="project-info-bar-component-item"
            style={{width: `${100 / data.length}%`}}
            key={item.name}
          >
            <div className="name">{item.value}</div>
            <div className="desc">{item.name}</div>
          </li>
        )
      }
    </ul>
  );
}

ProjectInfoBar.propTypes = {
  data: React.PropTypes.array.isRequired,
  className: React.PropTypes.string,
};

export default ProjectInfoBar;
