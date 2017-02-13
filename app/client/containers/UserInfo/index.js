/**
 * UserInfo
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import * as actions from './actions';

export class UserInfo extends PureComponent {
  componentDidMount() {
    const { userInfo } = this.props;

    if (!userInfo) {
      this.props.loadUserInfo();
    }
  }

  render() {
    const { userInfoData, userInfoLoading } = this.props;

    if (userInfoLoading) {
      return null;
    }

    const avatarUrl = get(userInfoData, 'info.base.avatar');

    return (
      <div className="user-info-container">
        <img className="user-info-avatar" src={avatarUrl ? avatarUrl : require('./imgs/pic_avatar_nav@2x.png')} alt="头像" />
      </div>
    );
  }
}

UserInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const userInfo = state.userInfo;

  return {
    userInfoData: userInfo.get('data'),
    userInfoLoading: userInfo.get('loading'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadUserInfo: () => dispatch(actions.loadUserInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
