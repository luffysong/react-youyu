/**
 * HelpDetail
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
import makeSelectHelpDetail from './selectors';

export class HelpDetail extends PureComponent {
  render() {
    return (
      <div className="help-detail-container">
        <Helmet
          title="HelpDetail"
          meta={[
            { name: 'description', content: 'Description of HelpDetail' },
          ]}
        />
        HelpDetail
      </div>
    );
  }
}

HelpDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HelpDetail: makeSelectHelpDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpDetail);
