/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import PrototypeBox from '../../components/PrototypeBox';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <PrototypeBox width="100%" height="70px">Header</PrototypeBox>
        {React.Children.toArray(children)}
        <PrototypeBox width="100%" height="220px" bg="#484b53" extraStyle={{color: '#dbdcde'}}>Footer</PrototypeBox>
        <PrototypeBox width="100%" height="37px" bg="#393c42" extraStyle={{color: '#9e9e9f'}}>Copyright</PrototypeBox>
      </div>
    );
  }
}

React.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
