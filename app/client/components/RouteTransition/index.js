/**
 * RouteTransition
 */

/**
 * External dependencies
 */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * Internal dependencies
 */
import './style.less';

function RouteTransition(props) {
  const { children } = props;

  return (
    <div className="route-transition-component">
      <ReactCSSTransitionGroup
        component="div"
        transitionName="router-fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {React.cloneElement(children, {
          key: location.pathname
        })}
      </ReactCSSTransitionGroup>
    </div>
  );
}

RouteTransition.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default RouteTransition;
