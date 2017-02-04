/**
 * Class
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
import ReasonsBar from './ReasonsBar';
import SucProjectSlick from '../../components/SucProjectSlick';
import HomeIntro from '../../components/HomeIntro';

export class Class extends PureComponent {
  render() {
    return (
      <div className="class-container">
        <Helmet
          title="新人指南"
          meta={[
            { name: 'description', content: '新人指南' },
          ]}
        />
        <section className="class-section-1">
          <h1 className="class-section-1-title">有娱投资</h1>
          <div className="class-section-1-desc">
            有娱投资是国内首家文娱交易所，主要为国内电影、电视剧、网剧、网大、网综、演唱会等文娱类项目提供资产交易平台。以文娱交易转让的核心业务为基础，为文娱产业链上优质内容制作者、产生者提供多方位的金融服务，从而满足企业的资金需求，保证企业资金流动性的合理充裕和融资总量的适度增长。
          </div>
        </section>
        <section className="class-section-2">
          <h2 className="class-section-2-title class-section-title">什么是可转让电影收益权</h2>
          <div className="class-section-2-desc">
            可转让电影收益权是指电影项目因票房、网络版权转让、赞助、贴片广告、品牌植入广告所产生收益的权利，不包括因电影项目补贴、获奖、衍生品开发等所产生的其他收益。电影项目投资协议对赞助收入、贴片广告收入、品牌植入广告收入的分配和使用存在其他约定的，电影投资收益为按照约定分配和使用之后的部分。
          </div>
          <h2 className="class-section-2-title class-section-title title-2">为什么投资可转让电影收益权</h2>
          <ReasonsBar />
        </section>
        <section className="class-section-3">
          <h2 className="class-section-3-title class-section-title">谁适合投资电影收益权</h2>
          <div className="class-section-3-desc">
            具有高风险承受能力，对电影投资有兴趣或者有一定行业经验的投资机构、个人投资者。
          </div>
          <img className="class-section-3-img" src={require('./imgs/pic_who_new@2x.png')} alt="谁适合投资影视收益权"/>
        </section>
        <section className="class-section-4">
          <h2 className="class-section-4-title class-section-title">成功投资案例</h2>
          <SucProjectSlick />
        </section>
        <section className="class-section-5">
          <HomeIntro className="class-section-5-intro" type="youyu" />
        </section>
        <section className="class-section-6">
          <h1 className="class-section-6-title class-section-title">怎么在有娱上投资</h1>
          <div className="class-section-6-progress">
            <div className="class-section-6-progress progress-1">
              <img src={require('./imgs/icon_safe.svg')} alt="支付保证金" />
              <div className="class-section-6-progress-wrapper">
                <div className="class-section-6-progress-name">
                  支付保证金
                </div>
                <div className="class-section-6-progress-desc">
                  转让价格的 1%
                </div>
              </div>
            </div>
            <img className="class-section-6-progress-arrow" src={require('./imgs/icon_arrow_progress.svg')} alt="" />
            <div className="class-section-6-progress progress-2">
              <img src={require('./imgs/icon_confirm.svg')} alt="转让方确定认购意向" />
              <div className="class-section-6-progress-wrapper">
                <div className="class-section-6-progress-name">
                  转让方确定认购意向
                </div>
                <div className="class-section-6-progress-desc">
                  与转让方洽谈达成一致
                </div>
              </div>
            </div>
            <img className="class-section-6-progress-arrow" src={require('./imgs/icon_arrow_progress.svg')} alt="" />
            <div className="class-section-6-progress progress-3">
              <img src={require('./imgs/icon_card.svg')} alt="支付尾款" />
              <div className="class-section-6-progress-wrapper">
                <div className="class-section-6-progress-name">
                  支付尾款
                </div>
                <div className="class-section-6-progress-desc">
                  快捷的权限变更
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Class.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Class);
