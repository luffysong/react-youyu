/**
 * About
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import Tracker from '../../components/Tracker';

export class About extends PureComponent {
  render() {
    return (
      <div className="about-container">
        <Helmet
          title="关于我们"
          meta={[
            { name: 'description', content: '关于我们' },
          ]}
        />
        <div className="about-wrapper container">
          <h1 className="about-title">关于我们</h1>
          <div className="about-desc">
            有娱投资是国内首家文娱金融交易支持中心，主要为国内电影、电视剧、网剧、网大、网综、舞台剧等文娱类项目提供资产交易平台。以文娱交易转让的核心业务为基础，为文娱产业链上优质内容生产者提供多方位的金融服务，从而满足项目的资金需求，保证项目资金流动性的合理充裕和融资总量的适度增长。
          </div>
          <div className="about-parts">
            <div className="about-parts-product">
              <img className="about-parts-img" src={require('./imgs/icon_ourproduct_about.svg')} alt="我们的产品" />
              <h2 className="about-parts-title">我们的产品</h2>
              <ul className="about-parts-list">
                <li className="about-parts-list-item">文娱项目投资收益权转让</li>
                <li className="about-parts-list-item">应收账款转让</li>
                <li className="about-parts-list-item">影城交易</li>
              </ul>
            </div>
            <div className="about-parts-split"></div>
            <div className="about-parts-product">
              <img className="about-parts-img" src={require('./imgs/icon_service_about.svg')} alt="我们的服务" />
              <h2 className="about-parts-title">我们的服务</h2>
              <ul className="about-parts-list">
                <li className="about-parts-list-item">严格的交易风险控制流程</li>
                <li className="about-parts-list-item">合格的金融资产交易所资质</li>
                <li className="about-parts-list-item">优质的投资标的筛选</li>
                <li className="about-parts-list-item">规范的投资收益分配规则</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default Tracker(connect(null, mapDispatchToProps)(About));
