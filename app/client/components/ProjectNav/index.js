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

function ProjectNav() {
  return (
    <div className="project-nav-component">
      <Link to="/project/quoting" activeClassName="active" className="project-nav-tab">
        转让中的份额
      </Link>
      <Link to="/project/detail" activeClassName="active" className="project-nav-tab">
        项目详情
      </Link>
      <Link to="/project/qa" activeClassName="active" className="project-nav-tab">
        常见问题
      </Link>
    </div>
  );
}

ProjectNav.propTypes = {

};

export default ProjectNav;
