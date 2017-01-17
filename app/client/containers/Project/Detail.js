/**
 * Detail
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
import makeSelectProject from './selectors';

export class Detail extends PureComponent {
  render() {
    return (
      <div className="project-container">
        <Helmet
          title="Detail"
          meta={[
            { name: 'description', content: 'Description of Detail' },
          ]}
        />
        Detail
      </div>
    );
  }
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Project: makeSelectProject(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
