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
import ProjectCarousel from '../../components/ProjectCarousel';

export class Home extends PureComponent {
  render() {
    return (
      <div className="home-container">
        <div className="slick-wrapper">
          <Slick className="home-slick" />
          <Announcements className="home-announcements" />
        </div>
        <ProjectCarousel className="home-project-carousel" />
        <HomeIntro className="home-rights-intro" type="rights" />
        <HomeIntro className="home-youyu-intro" type="youyu" />
        <HomeIntro className="home-partners-intro" type="partners" />
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
