/**
 * QuoteSuc
 */

/**
 * External dependencies
 */
import React, {PureComponent} from 'react';

/**
 * Internal dependencies
 */
import './style.less';

class QuoteSuc extends PureComponent {
  render() {
    return (
      <div className="quote-suc">
        <img className="suc-logo" src={require('./imgs/submitSuc.png')} alt=""/>
        <section className="submit-suc">提交完成</section>
        <section className="suc-tip">我们将在3个工作日内通知您审核结果</section>
      </div>
    );
  }
}

export default QuoteSuc;
