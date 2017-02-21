/**
 *
 * ProjectCarousel
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import { take } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import IndexSlick from '../IndexSlick';
import Button from '../Button';
import ProjectItem from '../ProjectItem';

class ProjectCarousel extends PureComponent {
  renderProjects(loading, projects) {
    const classList = ['carousel-item-first', 'carousel-item', 'carousel-item-last'];

    if (loading) {
      return Array(3).fill().map((_, index) => {
        return <ProjectItem className={`${classList[index]} 'loading'`} key={`project-item-${index}`} loading={true}></ProjectItem>;
      });
    }

    const renderNum =  projects.length >= 3 ? 3 : 1;

    return take(projects, renderNum).map((item, index) => {
      return (
        <ProjectItem data={item}
          className={`${renderNum === 1 ? 'carousel-item-one' : classList[index]}`}
          key={`project-item-${index}`}>
        </ProjectItem>
      );
    });
  }

  render() {
    const { loading, data } = this.props;

    if (!loading && !(data && data.length)) {
      return null;
    }

    return (
      <div className="project-carousel-component">
        <div className="carousel-title">转让中的项目</div>
        <div className="carousel-wrapper">
          <IndexSlick>
            { this.renderProjects(loading, data) }
          </IndexSlick>
        </div>
        <Button className="more-projects-btn" size="big" to="/projects">查看更多项目</Button>
      </div>
    );
  }
}

ProjectCarousel.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array,
  ]).isRequired,
};

export default ProjectCarousel;
