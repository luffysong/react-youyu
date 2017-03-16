/**
 * QA
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';
import HomeIntro from '../../components/HomeIntro';
import Tracker from '../../components/Tracker';

export class QA extends PureComponent {
  render() {
    const { userInfo } = this.props;

    return (
      <div className="project-container-qa-tab">
        <Helmet title="常见问题" />
        <div className="project-container-qa-tab-item">
          <div className="project-container-qa-tab-item-q">
            Q: 保证金交多少，如何缴纳？
          </div>
          <div className="project-container-qa-tab-item-a">
            <span>A</span>:交易保证金金额为挂牌价格的【5】%。意向受让方应当于申请认购后3个交易日内将保证金一次性交纳至平台指定的银行账户。
          </div>
        </div>
        <div className="project-container-qa-tab-item">
          <div className="project-container-qa-tab-item-q">
            Q: 有娱是安全的投资交易平台吗？
          </div>
          <div className="project-container-qa-tab-item-a">
            <span>A</span>: 有娱与天金所、新片场以及世界500强万达集团强强合作，拥有严格的交易风险控制流程、合格的金融资产交易所资质，优质的投资标的以及规范的投资收益分配规则，为用户提供正规的投资交易流程以及项目风险控制管理服务。
          </div>
        </div>
        <div className="project-container-qa-tab-item">
          <div className="project-container-qa-tab-item-q">
            Q: 认购项目的流程是什么？
          </div>
          <div className="project-container-qa-tab-item-a">
            <span>A</span>: 认购流程分以下几个步骤：<br />
            （1）选定收益权；（2）提交意向；（3）支付保证金；（4）双方达成意向；（5）协议签署；（6）协议备案；（7）尾款支付；（8）转让完成；（9）变更登记
          </div>
        </div>
        <div className="project-container-qa-tab-split"></div>
        <HomeIntro type="youyu" className="project-container-qa-tab-intro" userInfo={userInfo} />
      </div>
    );
  }
}

QA.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const layout = state.layout;
  return {
    userInfo: layout.getIn(['userInfo', 'data']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(QA));
