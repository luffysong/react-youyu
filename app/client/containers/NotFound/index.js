/**
 * NotFound
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';


export class NotFound extends PureComponent {
  render() {
    return (
      <div className="not-found-container">
        <Helmet
          title="NotFound"
          meta={[
            { name: 'description', content: 'Description of NotFound' },
          ]}
        />
        <div className="not-found-content">
          <img className="not-found-logo" src={require('./imgs/not-found-logo.png')} alt="404" width='384' />
          <img className="shadow" src={require('./imgs/shadow.png')} alt="404" width='356' />
          <img className="grey-ball" src={require('./imgs/grey-ball.png')} width='42' alt="" />
          <img className="blue-ball" src={require('./imgs/blue-ball.png')} width='54' alt="" />
          <img className="green-ball" src={require('./imgs/green-ball.png')} width='31' alt="" />
          <img className="orange-ball" src={require('./imgs/orange-ball.png')} width='42' alt="" />
          <img className="purple-ball" src={require('./imgs/purple-ball.png')} width='42' alt="" />
        </div>
        <section className="not-found-text">
          糟糕，您查询的页面找不到了，首页还有更多精彩内容哦！
        </section>
        <Link to={`/`} activeClassName="active" className="index-btn">返回首页</Link>

      </div>
    );
  }
}

NotFound.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(NotFound);
