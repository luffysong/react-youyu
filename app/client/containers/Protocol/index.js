/**
 * Protocol
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

export class Protocol extends PureComponent {
  render() {
    return (
      <div className="protocol-container">
        <Helmet
          title="协议"
          meta={[
            { name: 'description', content: 'Description of Protocol' },
          ]}
        />
        <div className="protocol-wrap">
          {this.props.children || '没有相关协议'}
        </div>
      </div>
    );
  }
}

Protocol.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Protocol);
