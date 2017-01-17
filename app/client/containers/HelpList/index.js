/**
 * HelpList
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
import makeSelectHelpList from './selectors';

export class HelpList extends PureComponent {
  render() {
    return (
      <div className="help-list-container">
        <Helmet
          title="HelpList"
          meta={[
            { name: 'description', content: 'Description of HelpList' },
          ]}
        />
        HelpList
      </div>
    );
  }
}

HelpList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HelpList: makeSelectHelpList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpList);
