/**
 * Quoting
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
import Pagination from '../../components/Pagination';

export class Quoting extends PureComponent {
  render() {
    return (
      <div className="project-container-quoting-tab">
        <Helmet
          title="转让中的份额"
          meta={[
            { name: 'description', content: 'Description of Quoting' },
          ]}
        />
        <Pagination />
      </div>
    );
  }
}

Quoting.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Quoting);
