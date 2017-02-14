/**
 * LeftSideMenu
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';

function LeftSideMenu(props) {
  const { loading, data, type } = props;

  if (type === 'uc') {
    return (
      <ul className="left-side-menu-component">
        {
          data && data.length && data.map((item, index) => {
            return <li className="left-side-menu-component-item" key={`left-side-menu-component-item-${index}`}>
              <Link to={item.link} activeClassName="active">{item.text}</Link>
            </li>
          })
        }
      </ul>
    );
  }

  const links = get(data, 'list');

  if (loading) {
    return <ul className="left-side-menu-component">
        {
          Array(5).fill().map((_, index) => {
            return <li className="left-side-menu-component-item loading" key={`left-side-menu-component-item-${index}`}></li>;
          })
        }
      </ul>;
  }

  return (
    <ul className="left-side-menu-component">
      {
        links && links.length && links.map((item, index) => {
          return <li className="left-side-menu-component-item" key={`left-side-menu-component-item-${index}`}>
            <Link to={`/help/list/${item.id}`} activeClassName="active">{item.name}</Link>
          </li>
        })
      }
    </ul>
  );
}

LeftSideMenu.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
    React.PropTypes.array,
  ]).isRequired,
};

LeftSideMenu.defaultProps = {
  loading: true,
};

export default LeftSideMenu;
