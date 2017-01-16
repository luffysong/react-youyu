/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import ProptypeBox from '../../components/ProptypeBox';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <ProptypeBox width="100%" height="70px">Header</ProptypeBox>
        {React.Children.toArray(children)}
        <ProptypeBox width="100%" height="220px" bg="#484b53" extraStyle={{color: '#dbdcde'}}>Footer</ProptypeBox>
        <ProptypeBox width="100%" height="37px" bg="#393c42" extraStyle={{color: '#9e9e9f'}}>Copyright</ProptypeBox>
      </div>
    );
  }
}

React.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
