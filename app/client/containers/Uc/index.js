/**
 * Uc
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';
import LeftSideBar from '../../components/LeftSideBar';
import LeftSideMenu from '../../components/LeftSideMenu';
import RouteTransition from '../../components/RouteTransition';
import { goToLogout } from '../../utils/user';

export class Uc extends PureComponent {
  renderUser(userInfo) {
    const avatar = get(userInfo, 'info.base.avatar');
    return <div className="uc-container-userinfo">
      <Link to="/uc" className="uc-container-userinfo-avatar"
        style={{backgroundImage: `url(${avatar ? avatar : require('../../components/UserInfo/imgs/pic_avatar_nav@2x.png')})`}} />
      <Link to="/uc" className="uc-container-userinfo-name">{get(userInfo, 'info.base.name')}</Link>
    </div>;
  }

  logout(e) {
    e.preventDefault();
    goToLogout();
  }

  render() {
    const { children, userInfo } = this.props;
    const sideMenuLinks = [
      {
        link: '/uc/orderMgmt',
        text: '订单管理',
      },
      {
        link: '/uc/rightsMgmt',
        text: '影视收益权管理',
      },
    ];

    if (get(userInfo, 'info.member_type')) {
      sideMenuLinks.splice(1, 0, {
        link: '/uc/initialMgmt',
        text: '初始份额管理',
      });
    }

    return (
      <div className="uc-container">
        <Helmet title="用户中心" />
        <div className="uc-wrapper container">
          <LeftSideBar className="uc-left-bar">
            { this.renderUser(userInfo) }
            <LeftSideMenu data={sideMenuLinks} type="uc" />
            <a href="" onClick={this.logout} className="uc-container-logout-btn">退出登录</a>
          </LeftSideBar>
          <RouteTransition>
            <div className="uc-right-wrapper">
              {children}
            </div>
          </RouteTransition>
        </div>
      </div>
    );
  }
}

Uc.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  const layout = state.layout;

  return {
    userInfo: layout.getIn(['userInfo', 'data']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Uc);
