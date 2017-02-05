/**
 * Uc
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
import makeSelectUc from './selectors';
import LeftSideBar from '../../components/LeftSideBar';
import LeftSideMenu from '../../components/LeftSideMenu';

export class Uc extends PureComponent {
  renderUser() {
    return <div className="uc-container-userinfo">
      <div className="uc-container-userinfo-avatar" style={{backgroundImage: `url()`}}></div>
      <div className="uc-container-userinfo-name">李思思</div>
    </div>;
  }

  render() {
    const { children } = this.props;
    const sideMenuLinks = [
      {
        link: '/uc/orderMgmt',
        text: '订单管理',
      },
      {
        link: '/uc/initialMgmt',
        text: '初始份额管理',
      },
      {
        link: '/uc/rightsMgmt',
        text: '影视收益权管理',
      },
    ];

    return (
      <div className="uc-container">
        <Helmet
          title="用户中心"
          meta={[
            { name: 'description', content: 'Description of Uc' },
          ]}
        />
        <div className="uc-wrapper container">
          <LeftSideBar className="uc-left-bar">
            { this.renderUser() }
            <LeftSideMenu links={sideMenuLinks} />
            <a href="" className="uc-container-logout-btn">退出登录</a>
          </LeftSideBar>
          {children}
        </div>
      </div>
    );
  }
}

Uc.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UC: makeSelectUc(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Uc);
