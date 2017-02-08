/**
 *
 * ProjectCarousel
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';

/**
 * Internal dependencies
 */
import './style.less';
import ProjectInfoBar from '../ProjectInfoBar';
import IndexSlick from '../IndexSlick';

class ProjectCarousel extends PureComponent {

  render() {
    const { loading, data } = this.props;

    if (loading) {
      return <h1>Loading</h1>;
    }

    const project = data[0];
    const projectInfo = [
      {
        name: '制片方',
        value: project.project.producer,
      },
      {
        name: '转让份额',
        value: project.project.transferable_ratio + '%',
      },
      {
        name: '项目阶段',
        value: project.project.stage,
      },
    ];

    return (
      <div className="project-carousel-component">
        <div className="carousel-title">转让中的项目</div>
        <div className="carousel-wrapper">
          <IndexSlick>
            {
              ['carousel-item-first', 'carousel-item', 'carousel-item-last'].map((item, index) => {
                return <div className={`${item}`} key={index}>
                  <div className="cover"></div>
                  <div className="info">
                    <div className="info-title">
                      {project.project ? project.project.name : ''}
                    </div>
                    <ProjectInfoBar data={projectInfo} />
                    <table className="transfer-info">
                      <tbody>
                      <tr className="transfer-info-item">
                        <td className="item-info">
                          <span>转让价格：</span>
                          <span className="font-white">￥10,000元</span>
                        </td>
                        <td>
                          <span>转让份额：</span>
                          <span className="font-white">1%</span>
                        </td>
                        <td>
                          <span>转让方：</span>
                          <span>章小勇</span>
                        </td>
                      </tr>
                      <tr className="transfer-info-item">
                        <td className="item-info">
                          <span>转让价格：</span>
                          <span className="font-white">￥10,000元</span>
                        </td>
                        <td>
                          <span>转让份额：</span>
                          <span className="font-white">1%</span>
                        </td>
                        <td>
                          <span>转让方：</span>
                          <span>章小勇</span>
                        </td>
                      </tr>
                      <tr className="transfer-info-item">
                        <td className="item-info">
                          <span>转让价格：</span>
                          <span className="font-white">￥10,000元</span>
                        </td>
                        <td>
                          <span>转让份额：</span>
                          <span className="font-white">1%</span>
                        </td>
                        <td>
                          <span>转让方：</span>
                          <span>章小勇</span>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <a className="more-link" href="">还有5个转让...</a>
                  </div>
                </div>
              })
            }
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
