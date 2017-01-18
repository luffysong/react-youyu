/**
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

class ProjectCarousel extends PureComponent {
  render() {
    return (
      <div className="project-carousel-component">
        <div className="carousel-title">转让中的项目</div>
        <div className="carousel-wrapper">
          <div className="carousel-item clearfix">
            <div className="cover"></div>
            <div className="info">
              <div className="info-title">
                神奇动物在哪里
              </div>
              <ul className="base-info">
                <li className="base-info-item">
                  <div className="name">华纳</div>
                  <div className="desc">制片方</div>
                </li>
                <li className="base-info-item">
                  <div className="name">10%</div>
                  <div className="desc">转让份额</div>
                </li>
                <li className="base-info-item">
                  <div className="name">8</div>
                  <div className="desc">挂牌标的</div>
                </li>
              </ul>
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
        </div>
      </div>
    );
  }
}

ProjectCarousel.propTypes = {

};

export default ProjectCarousel;
