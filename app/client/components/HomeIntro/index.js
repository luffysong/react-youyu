/**
 * Home - HomeIntro
 */

/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.less';

function HomeIntro(props) {
  const { className } = props;

  const classes = classnames([
    'home-intro-component',
    className,
  ]);

  return (
    <div className={classes}>
      <div className="intro-inner">
        {renderRightsIntro()}
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

HomeIntro.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default HomeIntro;
