/**
 * QA
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

export class QA extends PureComponent {
  render() {
    return (
      <div className="project-container">
        <Helmet
          title="常见问题"
          meta={[
            { name: 'description', content: 'Description of QA' },
          ]}
        />
        QA
      </div>
    );
  }
}

QA.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(QA);
