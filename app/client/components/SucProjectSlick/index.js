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
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: false,
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
            <div className="slick-item-avatar" style={{backgroundImage: `url(${require('./imgs/taijiong.jpg')})`}}></div>
            <div className="slick-item-title">《人再囧途之泰囧》</div>
            <div className="slick-item-desc">
              由光线传媒投资(投资比例达90%)的电影《人再囧途之泰囧》以制作加宣发总计近7000万的成本获得12亿票房，创造了中国电影史票房神话。其中，某电影出品人以400万投资额获得7000万回报书写投资奇迹。
            </div>
          </div>
        </div>
        <div>
          <div className="slick-item">
            <div className="slick-item-avatar" style={{backgroundImage: `url(${require('./imgs/houhuiwuqi.jpg')})`}}></div>
            <div className="slick-item-title">《后会无期》</div>
            <div className="slick-item-desc">
              韩寒导演的电影《后会无期》开机，经历准备、拍摄、后期制作的全部过程，仅7个月的时间，电影已成功登陆各大影院，首日票房达9580万元，实现超过6亿元的票房回报，经纬创投更是赚的“钵满盆盈”，投资人方励、路金波、韩寒以及博纳于冬获得高回报。
            </div>
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
