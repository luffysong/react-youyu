/**
 * HelpListItems
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';
import { get, fill } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';

function HelpListItems(props) {
  const { loading, data } = props;

  if (loading) {
    return <ul className="help-list-items-component">
      {
        fill(Array(10), 0).map((_, index) => {
          return <li className="help-list-items-component-item loading" key={`help-list-items-item-${index}`}></li>;
        })
      }
    </ul>
  }

  return (
    <ul className="help-list-items-component">
      {
        get(data, 'data') && data.data.map((item, index) => {
          return <li className="help-list-items-component-item" key={`help-list-items-item-${index}`}>
            <Link to={`/help/detail/${item.id}`}>{item.title}</Link>
          </li>
        })
      }
    </ul>
  );
}

HelpListItems.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]).isRequired,
};

HelpListItems.defaultProps = {
  loading: true,
  data: false,
};

export default HelpListItems;
