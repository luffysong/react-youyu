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
            有娱投资是36氪与普思资本、新片场、天津金融资产交易所共同成立的国内首家影视投资收益权交易支持平台，通过与天津金融资产交易所合作，为用户提供影视类项目的登记确权、挂牌摘牌、交易结算及收益分配等服务。
          </div>
          <div className="about-parts">
            <div className="about-parts-product">
              <img className="about-parts-img" src={require('./imgs/icon_ourproduct_about.svg')} alt="我们的产品" />
              <h2 className="about-parts-title">我们的产品</h2>
              <ul className="about-parts-list">
                <li className="about-parts-list-item">电影投资收益权转让</li>
                <li className="about-parts-list-item">电视剧应收账款收益权转让</li>
                <li className="about-parts-list-item">影城项目投资收益权转让</li>
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
