/**
 * Footer - ContactInfo
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */

function ContactInfo(props) {
  const { className } = props;

  return (
    <ul className={className}>
      <li><span></span>客服电话：010-59974027</li>
      <li><span></span>客服邮箱：youyutouzi@36kr.com</li>
      <li><span></span>工作时间：周一到周五 10:00 - 19:00</li>
    </ul>
  );
}

ContactInfo.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default ContactInfo;
