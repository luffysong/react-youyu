/**
 * Class
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import ReasonsBar from './ReasonsBar';
import SucProjectSlick from '../../components/SucProjectSlick';
import HomeIntro from '../../components/HomeIntro';
import Tracker from '../../components/Tracker';

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
            有娱投资是国内首家影视投资收益权交易支持平台，主要为国内电影、电视剧、电视综艺、网络剧、网络大电影、网络综艺等文娱类项目的影视投资收益权、应收账款等资产提供专业化交易支持服务，为文娱产业链上优质内容制作者、产生者提供多方位的服务，满足企业的资金需求，保证企业资金流动性的合理充裕和融资总量的适度增长。
          </div>
        </section>
        <section className="class-section-2">
          <h2 className="class-section-2-title class-section-title">什么是影视投资收益权</h2>
          <div className="class-section-2-desc">
            影视投资收益权是指因影视项目票房、网络版权转让或授权、赞助、贴片广告、品牌植入广告所产生的收益的权利和权益，但不包括因影视项目补贴、获奖、衍生品开发等所产生的其他收益的权利和权益。
          </div>
          <h2 className="class-section-2-title class-section-title title-2">为什么投资影视投资收益权</h2>
          <ReasonsBar />
        </section>
        <section className="class-section-3">
          <h2 className="class-section-3-title class-section-title">谁适合投资影视投资收益权</h2>
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
          <div className="class-section-6-inner">
            <h1 className="class-section-6-title class-section-title">怎么在有娱上投资</h1>
            <div className="class-section-6-progress">
              <div className="class-section-6-progress progress-1">
                <img src={require('./imgs/icon_safe.svg')} alt="支付保证金" />
                <div className="class-section-6-progress-wrapper">
                  <div className="class-section-6-progress-name">
                    支付保证金
                  </div>
                  <div className="class-section-6-progress-desc">
                    转让价格的 5%
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
          </div>
        </section>
        <section className="class-section-7">
          <h1 className="class-section-7-title class-section-title">怎么收益</h1>
          <div className="class-section-7-ways">
            <img className="class-section-7-way-1" src={require('./imgs/pic_how_2@2x.png')} alt="通过转让电影收益权获得转让价款收益"/>
            <img className="class-section-7-way-2" src={require('./imgs/pic_how_1@2x.png')} alt="在电影投资盈利情况下，通过影片收入分配获得投资利益"/>
          </div>
          <div className="class-section-7-intro">
            其中，转让价款收益为项目成交价格扣除掉平台手续费之后的价款；投资收益为影片公映或上线后，制片方根据电影投资收益登记册，按照投资比例通过天金所资金结算系统进行收益分配。
          </div>
        </section>
        <section className="class-section-8">
          <h1 className="class-section-8-title class-section-title">
            投资风险
          </h1>
          <div className="class-section-8-intro">
              受到娱乐行业投资风险较高的影响，电影项目可转让收益权投资是一种高风险投资项目，具体包括：<br />
              1、政策风险：电影行业受到国家有关法律、法规及政策的严格监督和管理，受到中宣部、文化部、国家新闻出版广电总局等部门的监管，政策的变化可能会影响项目投资收益，并可能导致投资亏损。<br />
              2、监管风险：从资格准入、内容审查到发行许可，行业严格监管贯穿于电影制作及发行全部业务流程。投资人投资电影，可能存在影片备案未获通过、拍摄完成未通过内容审查导致不能取得发行许可等风险。 <br />
              3、市场风险：电影票房会受到行业发展、政治经济、投资心理、市场预期等各种因素的影响而产生波动，从而导致投资收益水平发生变化，并可能引发亏损的风险。<br />
              具体风险提示详见<Link to="/protocol/risk">投资风险揭示书</Link>。
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

export default Tracker(connect(null, mapDispatchToProps)(Class));
