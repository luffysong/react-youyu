/**
 * CountDown
 */

/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import './style.less';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remain: this.props.remain,
    };
  }

  componentDidMount() {
    this.count();
  }

  count() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.setState({
        remain: this.state.remain - 1,
      }, () => this.count());
    }, 1000);
  }

  zeroPrefix(num) {
    num = parseInt(num, 10);

    if (num > 0) {
      if(num <= 9) {
        num = '0' + num;
      }
      return String(num);
    } else {
      return '00';
    }
  }

  getTimeRemaining(remain){
    const seconds = Math.floor(remain % 60);
    const minutes = Math.floor((remain / 60) % 60);
    const hours = Math.floor((remain / (60 * 60)) % 24);
    const days = Math.floor(remain / (60 * 60 * 24));
    return {
      'days': days,
      'hours': this.zeroPrefix(hours),
      'minutes': this.zeroPrefix(minutes),
      'seconds': this.zeroPrefix(seconds),
    };
  }

  parseTime(remain) {
    const timeObj = this.getTimeRemaining(remain);

    if (timeObj.days > 0) {
      return `${timeObj.days}天`;
    } else {
      return `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
    }
  }

  render() {
    return (
      <div className="count-down-component">
        {this.parseTime(this.state.remain)}
      </div>
    );
  }
}

CountDown.propTypes = {
  remain: React.PropTypes.number.isRequired,
};

export default CountDown;
