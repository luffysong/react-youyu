/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import './style.less';

class PrototypeBox extends Component {
  render() {
    const { width, height, bg, children, extraStyle } = this.props;
    const styles = {
      width,
      height,
      lineHeight: height,
      backgroundColor: bg,
      ...extraStyle,
    };

    return (
      <div className="prototype-box" style={{...styles}}>
        {children}
      </div>
    );
  }
}

React.propTypes = {
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
  bg: React.PropTypes.string,
  extraStyle: React.PropTypes.object,
};

export default PrototypeBox;
