/**
 * Home - HomeIntro
 */

/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';

function HomeIntro(props) {
  const { className, type } = props;

  const classes = classnames([
    'home-intro-component',
    className,
  ]);

  return (
    <div className={classes}>
      <div className="intro-inner">
        {type === 'rights' ? renderRightsIntro() : renderYouYuIntro()}
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

function renderYouYuIntro() {
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
          <div className="intro">与世界500强企业万达集团合作，打造影视行业一受收益权转让平台。</div>
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
      <Link to="/register" className="btn-quick-register">
          <img src={require('./imgs/btn_submit_nor.svg')} alt="快速开户" />
          <span>快速开户</span>
      </Link>
    </div>
  );
}

HomeIntro.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default HomeIntro;
