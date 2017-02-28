/**
 * Home
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import Slick from '../../components/Slick';
import Announcements from '../../components/Announcements';
import HomeIntro from '../../components/HomeIntro';
import ProjectCarousel from '../../components/ProjectCarousel';
import Tracker from '../../components/Tracker';
import * as actions from './actions';
import { get } from 'lodash';

export class Home extends PureComponent {
  componentDidMount() {
    this.props.loadProjects();
    this.props.homeNotice();
    this.props.homeBanner();
  }

  render() {
    const {
      projectsLoading,
      projectsData,
      noticeData,
      bannerData,
      userInfo,
    } = this.props;

    return (
      <div className="home-container">
        <Helmet title="首页" />
        <div className="slick-wrapper">
          <Slick className="home-slick" data={bannerData} />
          <Announcements className="home-announcements" data={get(noticeData, 'info.data')} />
        </div>
        <ProjectCarousel className="home-project-carousel" loading={projectsLoading} data={projectsData} />
        <HomeIntro className="home-rights-intro" type="rights" />
        <HomeIntro className="home-youyu-intro" type="youyu" userInfo={userInfo} />
        <HomeIntro className="home-partners-intro" type="partners" />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const home = state.home;
  const layout = state.layout;

  return {
    projectsLoading: home.get('projectsLoading'),
    projectsData: home.get('projectsData'),
    noticeLoading: home.get('noticeLoading'),
    noticeData: home.get('noticeData'),
    bannerLoading: home.get('bannerLoading'),
    bannerData: home.get('bannerData'),
    userInfo: layout.getIn(['userInfo', 'data']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadProjects: () => dispatch(actions.loadProjects()),
    homeNotice: () => dispatch(actions.homeNotice()),
    homeBanner: () => dispatch(actions.homeBanner()),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(Home));
