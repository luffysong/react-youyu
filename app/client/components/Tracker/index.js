/**
 * Tracker
 */

/**
 * External dependencies
 */
import React, { Component } from 'react';

function Tracker(WrappedComponent) {
  return class TrackerHOC extends Component {
    componentDidMount() {
      window.krtracker && window.krtracker('trackPageView', window.location.pathname);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

Tracker.propTypes = {

};

export default Tracker;
