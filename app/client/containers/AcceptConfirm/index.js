/**
 * AcceptConfirm
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
import makeSelectAcceptConfirm from './selectors';
import AcceptInfoBar from '../../components/AcceptInfoBar';

export class AcceptConfirm extends PureComponent {
  render() {
    return (
      <div className="accept-confirm-container">
        <Helmet
          title="确认意向"
          meta={[
            { name: 'description', content: 'Description of AcceptConfirm' },
          ]}
        />
        <AcceptInfoBar />
      </div>
    );
  }
}

AcceptConfirm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AcceptConfirm: makeSelectAcceptConfirm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptConfirm);
