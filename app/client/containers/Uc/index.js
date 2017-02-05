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
            <LeftSideMenu links={sideMenuLinks} />
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
