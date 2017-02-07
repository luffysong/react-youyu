/**
 * QuoteProgress
 */

/**
 * External dependencies
 */
import React, {PureComponent} from 'react';

/**
 * Internal dependencies
 */
import './style.less';

class QuoteProgress extends PureComponent {
  render() {
    const {progress} = this.props;
    return (
      <div className="quote-progress-component">
        <ul className="progress-list">
          <li className={`${progress}` === `1` ? 'active' : ''}>
            <span className="list-point">1</span>
            <span className="list-text">设置转让份额与价格</span>
            <img className="list-logo" src={ `${progress}` === `1` ? require('./imgs/icon_arrow_sel.svg') : require('./imgs/icon_arrow_nor.svg')} alt=""></img>
          </li>
          <li className={`${progress}` === `2` ? 'active' : ''}>
            <span className="list-point">2</span>
            <span className="list-text">其他设置</span>
            <img className="list-logo" src={ `${progress}` === `2` ? require('./imgs/icon_arrow_sel.svg') : require('./imgs/icon_arrow_nor.svg')} alt=""></img>
          </li>
          <li className={`${progress}` === `3` ? 'active' : ''}>
            <span className="list-point">3</span>
            <span className="list-text">申请完成</span>
            <img className="list-logo" src={ `${progress}` === `3` ? require('./imgs/icon_arrow_sel.svg') : require('./imgs/icon_arrow_nor.svg')} alt=""></img>
          </li>
        </ul>
      </div>
    );
  }
}

export default QuoteProgress;
