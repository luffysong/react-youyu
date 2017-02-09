/**
 * ProjectNav
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

function ProjectNav(props) {
  const { id } = props;

  return (
    <div className="project-nav-component">
      <Link to={`/project/${id}/quoting`} activeClassName="active" className="project-nav-tab">
        转让中的份额
      </Link>
      <Link to={`/project/${id}/detail`} activeClassName="active" className="project-nav-tab">
        项目详情
      </Link>
      <Link to={`/project/${id}/qa`} activeClassName="active" className="project-nav-tab">
        常见问题
      </Link>
    </div>
  );
}

ProjectNav.propTypes = {

};

export default ProjectNav;
