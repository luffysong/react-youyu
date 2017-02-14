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

/**
 * Internal dependencies
 */
import './style.less';
import LeftSideBar from '../../components/LeftSideBar';
import LeftSideMenu from '../../components/LeftSideMenu';
import RouteTransition from '../../components/RouteTransition';
import config from '../../config';

export class Uc extends PureComponent {
  renderUser(userInfo) {
    const avatar = get(userInfo, 'info.base.avatar');
    return <div className="uc-container-userinfo">
      <div className="uc-container-userinfo-avatar"
        style={{backgroundImage: `url(${avatar ? avatar : require('../../components/UserInfo/imgs/pic_avatar_nav@2x.png')})`}}>
      </div>
      <div className="uc-container-userinfo-name">{get(userInfo, 'info.base.name')}</div>
    </div>;
  }

  logout(e) {
    e.preventDefault();
    const backUrl = encodeURIComponent(location.href);
    location.href = `${config.apiBase}/passport/logout?return_to=${backUrl}`;
  }

  render() {
    const { children, userInfo } = this.props;
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
        <Helmet title="用户中心" />
        <div className="uc-wrapper container">
          <LeftSideBar className="uc-left-bar">
            { this.renderUser(userInfo) }
            <LeftSideMenu data={sideMenuLinks} type="uc" />
            <a href="" onClick={this.logout} className="uc-container-logout-btn">退出登录</a>
          </LeftSideBar>
          <RouteTransition>
            {children}
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
