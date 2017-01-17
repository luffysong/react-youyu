/**
 * NotFound
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


export class NotFound extends PureComponent {
  render() {
    return (
      <div className="not-found-container">
        <Helmet
          title="NotFound"
          meta={[
            { name: 'description', content: 'Description of NotFound' },
          ]}
        />
        NotFound
      </div>
    );
  }
}

NotFound.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(NotFound);
