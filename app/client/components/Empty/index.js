/**
 * Empty
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

function Empty(props) {
  const classes = classnames([
    'empty-component',
    props.className,
  ]);
  return (
    <div className={classes}>
      <img src={require('./imgs/pic_blank@2x.png')}  alt="数据为空"/>
      {
        props.text
        ? <p>{props.text}</p>
        : null
      }
    </div>
  );
}

Empty.propTypes = {
  className: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default Empty;
