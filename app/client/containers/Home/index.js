/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import ProptypeBox from '../../components/ProptypeBox';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <ProptypeBox width="100%" height="70px">Header</ProptypeBox>
        <ProptypeBox width="100%" height="350px" bg="#000" extraStyle={{position: 'relative'}}>
          Slider
          <ProptypeBox width="100%" height="50px" bg="rgba(255, 255, 255, 0.1)" extraStyle={{position: 'absolute', bottom: 0}}>Notice</ProptypeBox>
        </ProptypeBox>
        <ProptypeBox width="100%" height="590px">转让中的项目</ProptypeBox>
        <ProptypeBox width="100%" height="448px" bg="#f5f5f5" extraStyle={{color: '#2d2f33'}}>影视收益权</ProptypeBox>
        <ProptypeBox width="100%" height="525px" bg="#ececec" extraStyle={{color: '#2d2f33'}}>为什么选择有娱</ProptypeBox>
        <ProptypeBox width="100%" height="320px" bg="#f5f5f5" extraStyle={{color: '#2d2f33'}}>战略合作伙伴</ProptypeBox>
        <ProptypeBox width="100%" height="220px" bg="#484b53" extraStyle={{color: '#dbdcde'}}>Footer</ProptypeBox>
        <ProptypeBox width="100%" height="37px" bg="#393c42" extraStyle={{color: '#9e9e9f'}}>Copyright</ProptypeBox>
      </div>
    );
  }
}

export default Home;
