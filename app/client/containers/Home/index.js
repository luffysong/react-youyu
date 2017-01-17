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
import PrototypeBox from '../../components/PrototypeBox';

export class Home extends PureComponent {
  render() {
    return (
      <div className="home-container">
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Description of Home' },
          ]}
        />
        <PrototypeBox width="100%" height="350px" bg="#000" extraStyle={{position: 'relative'}}>
          Slider
          <PrototypeBox width="100%" height="50px" bg="rgba(255, 255, 255, 0.1)" extraStyle={{position: 'absolute', bottom: 0}}>Notice</PrototypeBox>
        </PrototypeBox>
        <PrototypeBox width="100%" height="590px">转让中的项目</PrototypeBox>
        <PrototypeBox width="100%" height="448px" bg="#f5f5f5" extraStyle={{color: '#2d2f33'}}>影视收益权</PrototypeBox>
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
