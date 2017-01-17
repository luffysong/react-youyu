/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import PrototypeBox from '../../components/PrototypeBox';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
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

export default Home;
