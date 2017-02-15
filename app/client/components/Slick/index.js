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
    const { className, data } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      autoplay: false,
      autoplaySpeed: 3000,
    };

    const classes = classnames([
      'slick-component',
      className,
    ]);

    return (
        data && data.length ?
        <Slider {...settings} className={classes}>
          {
            data && data.map((item, index) => {
              return <div className="slick-item" style={{backgroundImage: `url(${item.img_url})`}} key={`slick-${index}`}>
                     </div>
            })
          }
        </Slider> : null
    );
  }
}

Slick.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Slick;
