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
import ProjectInfoBar from '../ProjectInfoBar';
import IndexSlick from '../IndexSlick';

class ProjectCarousel extends PureComponent {
  renderProjects(loading, projects) {
    const classList = ['carousel-item-first', 'carousel-item', 'carousel-item-last'];

    if (loading) {
      return Array(3).fill().map((_, index) => {
        return <div className={`${index} ${classList[index]} loading`} key={`project-item-${index}`}></div>;
      });
    }

    const renderNum =  projects.length >= 3 ? 3 : 1;

    return projects && projects.length && take(projects, renderNum).map((item, index) => {
      const projectInfo = [
        {
          name: '制片方',
          value: item.project.producer,
        },
        {
          name: '转让份额',
          value: item.project.transferable_ratio + '%',
        },
        {
          name: '挂牌标的',
          value: item.listing && item.listing.length,
        },
      ];

      return <div className={`${renderNum === 1 ? 'carousel-item-one' : classList[index]}`} key={`project-item-${index}`}>
        <div className="cover" style={{ backgroundImage: `url(${item.project && item.project.list_img})`}}></div>
        <div className="info">
          <div className="info-title">
            {item.project ? item.project.name : ''}
          </div>
          <ProjectInfoBar data={projectInfo} />
          { this.renderList(item.listing) }
          {
            item.listing && item.listing.length && item.listing.length > 3
            ? <a className="more-link" href="">还有{item.listing.length - 3}个转让...</a>
            : null
          }
        </div>
      </div>;
    })
  }

  renderList(list) {
    return <table className="transfer-info">
      <tbody>
        {
          list && list.length && take(list, 3).map((item, index) => {
            return <tr className="transfer-info-item" key={`transfer-info-item-${index}`}>
              <td className="item-info">
                <span>转让价格：</span>
                <span className="font-white">￥{item.price}元</span>
              </td>
              <td>
                <span>转让份额：</span>
                <span className="font-white">{item.share}%</span>
              </td>
              <td>
                <span>转让方：</span>
                <span>{item.transferor}</span>
              </td>
            </tr>;
          })
        }
      </tbody>
    </table>;
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
