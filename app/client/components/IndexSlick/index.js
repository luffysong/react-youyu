/**
 * Slick
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import $ from 'jquery';

/**
 * Internal dependencies
 */
import './style.less';

class IndexSlick extends PureComponent {
  componentDidMount() {
    const _this = this;
    const setTimer = () => {
      this.timer = window.setInterval(() => {
        let arr = [];
        const len = $(this.refs.child).children().length;
        if (len < 3) {
          return;
        }
        $(this.refs.child).children().each((index, item) => arr.push(item.className));
        $(this.refs.child).children().each((index, item) => {
          var temp;
          if (`${index}` === `0`) {
            temp = len - 1;
          } else {
            temp = index - 1;
          }
          item.className = arr[temp];
        });
      }, 3000);
    };

    $(this.refs.child).on('mouseenter',(e) => {
      if ($(e.target).hasClass('carousel-item')) {
        window.clearInterval(_this.timer);
      }
    });

    $(this.refs.child).on('mouseleave',() => {
      window.clearInterval(_this.timer);
      setTimer();
    });

    setTimer();
  }

  componentWillUnmount() {
    /*组件销毁时,清除定时器*/
    window.clearInterval(this.timer);
  }
  render() {

    return (
      <div className="index-slick-wrapper" ref="child">
        {this.props.children}
      </div>
    );
  }
}

IndexSlick.propTypes = {
};

export default IndexSlick;
