/**
 * Transfer
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';

export class Transfer extends PureComponent {
  render() {
    return (
      <div className="transfer-container">
        <Helmet
          title="Transfer"
          meta={[
            { name: 'description', content: 'Description of Transfer' },
          ]}
        />
        Transfer
      </div>
    );
  }
}

Transfer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
