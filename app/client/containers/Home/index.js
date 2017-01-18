/**
 * Home
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
import makeSelectHome from './selectors';
import Slick from '../../components/Slick';
import Announcements from '../../components/Announcements';
import HomeIntro from '../../components/HomeIntro';
import PrototypeBox from '../../components/PrototypeBox';

export class Home extends PureComponent {
  render() {
    return (
      <div className="home-container">
        <Helmet
          title="首页"
          meta={[
            { name: 'description', content: 'Description of Home' },
          ]}
        />
        <div className="slick-wrapper">
          <Slick className="home-slick" />
          <Announcements className="home-announcements" />
        </div>
        <PrototypeBox width="100%" height="590px">转让中的项目</PrototypeBox>
        <HomeIntro className="home-rights-intro" />
        <PrototypeBox width="100%" height="525px" bg="#ececec" extraStyle={{color: '#2d2f33'}}>为什么选择有娱</PrototypeBox>
        <PrototypeBox width="100%" height="320px" bg="#f5f5f5" extraStyle={{color: '#2d2f33'}}>战略合作伙伴</PrototypeBox>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
