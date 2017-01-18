/**
 * Slick
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import Slider from 'react-slick';

/**
 * Internal dependencies
 */
import './style.less';

class Slick extends PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <Slider {...settings} className="slick-component">
        <div className="slick-item">
          1
        </div>
        <div className="slick-item">
          2
        </div>
        <div className="slick-item">
          3
        </div>
        <div className="slick-item">
          4
        </div>
      </Slider>
    );
  }
}

Slick.propTypes = {

};

export default Slick;
