/**
 * External dependencies
 */
import React, { Component } from 'react';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout-container">
        <Helmet
          titleTemplate="%s - 有娱"
          defaultTitle="有娱"
          meta={[
            { name: 'description', content: '有娱' },
          ]}
        />
        <Header />
        {React.Children.toArray(children)}
        <Footer />
      </div>
    );
  }
}

React.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
