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
import LeftSideMenu from '../../components/LeftSideMenu';

export class Help extends PureComponent {
  render() {
    const { children } = this.props;
    const sideMenuLinks = [
      {
        link: '/help/list',
        text: '了解影视收益权投资',
      },
      {
        link: '/help/detail',
        text: '投资规则',
      },
      {
        link: '/help/detail',
        text: '会员制度',
      },
      {
        link: '/help/detail',
        text: '保证金规则',
      },
      {
        link: '/help/detail',
        text: '支付问题',
      },
    ];

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
            <LeftSideMenu links={sideMenuLinks} />
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
