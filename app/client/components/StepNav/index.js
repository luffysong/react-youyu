/**
 * StepNav
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

function StepNav(props) {
  const { steps, currentPath } = props;

  return (
    <ul className="step-nav-component">
      {
        steps && steps.length && steps.map((item, index) => {
          return [
            <li className={`step-nav-component-item ${currentPath.indexOf(item.link) >= 0  ? 'highlight' : ''}`} key={`step-nav-component-item-${index}`}>
              <div className="step-nav-component-item-sign">
                {index + 1}
              </div>
              {
                item.link
                ?
                  <Link to={item.link} activeClassName="active" onClick={e => e.preventDefault()}>
                    {item.name}
                  </Link>
                :
                  <div className="step-nav-component-item-name">
                    {item.name}
                  </div>
              }
            </li>,
            <img className={`${steps.length === (index + 1) ? 'hide' : ''}`} src={currentPath.indexOf(item.link) >= 0 ? require('./imgs/icon_arrow_sel.svg') : require('./imgs/icon_arrow_nor.svg')} alt=""/>
          ];
        })
      }
    </ul>
  );
}

StepNav.propTypes = {
  steps: React.PropTypes.array.isRequired,
};

export default StepNav;
