/**
 * UcNavTab
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';

function UcNavTab(props) {
  const { links } = props;

  return (
    <ul className="uc-nav-tab-component clearfix">
      {
        links && links.length && links.map((item, index) => {
          return <li key={`uc-nav-tab-item-${index}`}>
            <Link to={item.link} activeClassName="active">{item.text}</Link>
          </li>
        })
      }
    </ul>
  );
}

UcNavTab.propTypes = {
  links: React.PropTypes.array.isRequired,
};

export default UcNavTab;
