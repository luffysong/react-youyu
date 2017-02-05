/**
 * Help
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
import makeSelectHelp from './selectors';
import LeftSideBar from '../../components/LeftSideBar';
import HelpMenu from '../../components/HelpMenu';

export class Help extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="help-container">
        <Helmet
          title="帮助中心"
          meta={[
            { name: 'description', content: 'Description of Help' },
          ]}
        />
        <div className="help-wrapper container">
          <LeftSideBar className="help-left-bar">
            <div className="help-left-bar-top">
              常见问题
            </div>
            <HelpMenu />
          </LeftSideBar>
          {children}
        </div>
      </div>
    );
  }
}

Help.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Help: makeSelectHelp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
