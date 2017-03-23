/**
 * Home - HomeIntro
 */

/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';

function HomeIntro(props) {
  const { className, type, userInfo } = props;

  const classes = classnames([
    'home-intro-component',
    className,
  ]);

  return (
    <div className={classes}>
      <div className="intro-inner">
        {type === 'rights' ? renderRightsIntro() : null}
        {type === 'youyu' ? renderYouYuIntro(userInfo) : null}
        {type === 'partners' ? renderPartners() : null}
      </div>
    </div>
  );
}

function renderRightsIntro() {
  return (
    <div>
      <h3 className="intro-title">影视投资收益权</h3>
      <ul className="intro-items">
        <li className="intro-item">
          <img src={require('./imgs/icon_market_index.svg')} alt="市场前景好" />
          <div className="title">市场前景好</div>
          <div className="intro">预计2018年，中国将超越美国成为世界第一大电影市场。</div>
        </li>
        <li className="intro-item">
          <img src={require('./imgs/icon_cycle_index.svg')} alt="回款周期短" />
          <div className="title">回款周期短</div>
          <div className="intro">影视票房收入的回款周期短，变现能力强，可以再短时间内获取差价。</div>
        </li>
        <li className="intro-item">
          <img src={require('./imgs/icon_inmagination_index.svg')} alt="收益具有想象力" />
          <div className="title">收益具有想象力</div>
          <div className="intro">影视投资具有较高的行业壁垒和投资风险。同时也具有较高的投资回报。</div>
        </li>
        <li className="intro-item">
          <img src={require('./imgs/icon_extra_index.svg')} alt="影视附加值丰富" />
          <div className="title">影视附加值丰富</div>
          <div className="intro">投资影视可以获得参与影视制作、发行的全程的机会，感受全新的投资体验。</div>
        </li>
      </ul>
    </div>
  );
}

function renderYouYuIntro(userInfo) {
  return (
    <div>
      <h3 className="intro-title">为什么选择有娱</h3>
      <ul className="intro-items">
        <li className="intro-item">
          <img src={require('./imgs/icon_right_index.svg')} alt="权威公信" />
          <div className="title">权威公信</div>
          <div className="intro">有娱的合作伙伴“天金所”是财政部和天津市政府批准的全国首家金融资产交易所。</div>
        </li>
        <li className="intro-item">
          <img src={require('./imgs/icon_advantage_index.svg')} alt="行业领先" />
          <div className="title">行业领先</div>
          <div className="intro">与新片场、普思资本等行业龙头合作，打造文娱资产交易服务平台。</div>
        </li>
        <li className="intro-item">
          <img src={require('./imgs/icon_first_index.svg')} alt="全国首创" />
          <div className="title">全国首创</div>
          <div className="intro">有娱是全国首家影视投资收益权转让交易平台。</div>
        </li>
        <li className="intro-item">
          <img src={require('./imgs/icon_proj_index.svg')} alt="甄选项目" />
          <div className="title">甄选项目</div>
          <div className="intro">有娱遴选优质项目，提供正规的投资交易流程以及项目风险控制管理服务。</div>
        </li>
      </ul>
      {
        get(userInfo, 'info.member_type')
        ? null
        : <Link to="/register" className="btn-quick-register">
              <img src={require('./imgs/btn_submit_nor.svg')} alt="快速开户" />
              <span>快速开户</span>
          </Link>
      }
    </div>
  );
}

function renderPartners() {
  return (
    <div>
      <h3 className="intro-title">战略合作伙伴</h3>
      <ul className="intro-items">
        <li className="intro-item">
          <a href="http://www.tjfae.com/" target="_blank">
            <img className="partner" src={require('./imgs/partners/pic_partner_tianjinsuo@2x.png')} alt="天金所" />
          </a>
        </li>
        <li className="intro-item">
          <a href="http://www.pusicapital.com/" target="_blank">
            <img className="partner" src={require('./imgs/partners/pic_partner_pusi@2x.png')} alt="普思资本" />
          </a>
        </li>
        <li className="intro-item">
          <a href="https://www.antgroup.com/" target="_blank">
            <img className="partner" src={require('./imgs/partners/pic_partner_mayi@2x.png')} alt="蚂蚁金服" />
          </a>
        </li>
        <li className="intro-item">
          <a href="http://www.xinpianchang.com/" target="_blank">
            <img className="partner" src={require('./imgs/partners/pic_partner_xinpianchang@2x.png')} alt="新片场" />
          </a>
        </li>
      </ul>
    </div>
  );
}

HomeIntro.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default HomeIntro;
