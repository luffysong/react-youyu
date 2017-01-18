/**
 * Slick
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

class Slick extends PureComponent {
  render() {
    const { className } = this.props;

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

    const classes = classnames([
      'slick-component',
      className,
    ]);

    return (
      <Slider {...settings} className={classes}>
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
  className: React.PropTypes.string.isRequired,
};

export default Slick;
