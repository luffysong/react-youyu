/**
 * UserInfo
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';
import { goToLogout } from '../../utils/user';

class UserInfo extends PureComponent {
  logout(e) {
    e.preventDefault();
    goToLogout();
  }

  render() {
    const { data, loading } = this.props;

    if (loading) {
      return null;
    }

    const avatarUrl = get(data, 'info.base.avatar');

    return (
      <div className="user-info-component">
        <Link to="uc">
          <img className="user-info-avatar" src={avatarUrl ? avatarUrl : require('./imgs/pic_avatar_nav@2x.png')} alt="头像" />
        </Link>
        <ul className="user-info-menu">
          <li>
            <Link activeClassName="active" to="/uc/rightsMgmt/listing">交易中</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/uc/rightsMgmt/holding">持有中</Link>
          </li>
          <li className="split"></li>
          <li className="logout">
            <a href="" onClick={this.logout}>退出</a>
          </li>
        </ul>
      </div>
    );
  }
}

UserInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default UserInfo;
