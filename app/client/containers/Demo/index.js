/**
 * Demo
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

/**
 * Internal dependencies
 */
import './style.less';
import makeSelectDemo from './selectors';


export class Demo extends PureComponent {
  render() {
    return (
      <div>
        <Helmet
          title="Demo"
          meta={[
            { name: 'description', content: 'Description of Demo' },
          ]}
        />
        Demo
      </div>
    );
  }
}

Demo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Demo: makeSelectDemo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
