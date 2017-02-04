/**
 * SucProjectSlick
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.less';

class SucProjectSlick extends PureComponent {
  render() {
    const { className } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: true,
      autoplay: false,
      autoplaySpeed: 3000,
    };

    const classes = classnames([
      'suc-project-slick-component',
      className,
    ]);

    return (
      <Slider {...settings} className={classes}>
        <div>
          <div className="slick-item">
            <div className="slick-item-avatar"></div>
            <div className="slick-item-title">《人再囧途之泰囧》</div>
            <div className="slick-item-desc">由光线传媒投资(投资比例达90%)的电影《人再囧途之泰囧》以制作加宣发总计近7000万的成本获得12亿票房，创造了中国电影史票房神话。其中，某电影出品人以400万投资额获得7000万回报书写投资奇迹。</div>
          </div>
        </div>
        <div>
          <div className="slick-item">
            <div className="slick-item-avatar"></div>
            <div className="slick-item-title">《人再囧途之泰囧》</div>
            <div className="slick-item-desc">由光线传媒投资(投资比例达90%)的电影《人再囧途之泰囧》以制作加宣发总计近7000万的成本获得12亿票房，创造了中国电影史票房神话。其中，某电影出品人以400万投资额获得7000万回报书写投资奇迹。</div>
          </div>
        </div>
        <div>
          <div className="slick-item">
            <div className="slick-item-avatar"></div>
            <div className="slick-item-title">《人再囧途之泰囧》</div>
            <div className="slick-item-desc">由光线传媒投资(投资比例达90%)的电影《人再囧途之泰囧》以制作加宣发总计近7000万的成本获得12亿票房，创造了中国电影史票房神话。其中，某电影出品人以400万投资额获得7000万回报书写投资奇迹。</div>
          </div>
        </div>
        <div>
          <div className="slick-item">
            <div className="slick-item-avatar"></div>
            <div className="slick-item-title">《人再囧途之泰囧》</div>
            <div className="slick-item-desc">由光线传媒投资(投资比例达90%)的电影《人再囧途之泰囧》以制作加宣发总计近7000万的成本获得12亿票房，创造了中国电影史票房神话。其中，某电影出品人以400万投资额获得7000万回报书写投资奇迹。</div>
          </div>
        </div>
        <div>
          <div className="slick-item">
            <div className="slick-item-avatar"></div>
            <div className="slick-item-title">《人再囧途之泰囧》</div>
            <div className="slick-item-desc">由光线传媒投资(投资比例达90%)的电影《人再囧途之泰囧》以制作加宣发总计近7000万的成本获得12亿票房，创造了中国电影史票房神话。其中，某电影出品人以400万投资额获得7000万回报书写投资奇迹。</div>
          </div>
        </div>
        <div>
          <div className="slick-item">
            <div className="slick-item-avatar"></div>
            <div className="slick-item-title">《人再囧途之泰囧》</div>
            <div className="slick-item-desc">由光线传媒投资(投资比例达90%)的电影《人再囧途之泰囧》以制作加宣发总计近7000万的成本获得12亿票房，创造了中国电影史票房神话。其中，某电影出品人以400万投资额获得7000万回报书写投资奇迹。</div>
          </div>
        </div>
      </Slider>
    );
  }
}

SucProjectSlick.propTypes = {
  className: React.PropTypes.string,
};

export default SucProjectSlick;
