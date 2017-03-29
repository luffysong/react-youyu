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
  const defaultTemplate = (
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
  const otherTemplate = (
    <div className="project-nav-component">
      <Link to={`/project/${id}/detail`} activeClassName="active" className="project-nav-tab">
        项目详情
      </Link>
      <Link to={`/project/${id}/quoting`} activeClassName="active" className="project-nav-tab">
        转让中的份额
      </Link>
      <Link to={`/project/${id}/qa`} activeClassName="active" className="project-nav-tab">
        常见问题
      </Link>
    </div>
  );
  if(props.data && !props.data.listing.length) {
    return otherTemplate;
  }
  return defaultTemplate;
}

ProjectNav.propTypes = {

};

export default ProjectNav;
