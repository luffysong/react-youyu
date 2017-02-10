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

export class QA extends PureComponent {
  render() {
    return (
      <div className="project-container-qa-tab">
        <Helmet
          title="常见问题"
          meta={[
            { name: 'description', content: 'Description of QA' },
          ]}
        />
        <div className="project-container-qa-tab-item">
          <div className="project-container-qa-tab-item-q">
            Q: 投资流程是什么样的？
          </div>
          <div className="project-container-qa-tab-item-a">
            <span>A</span>: 应根据具体的收益权转让合同的条款判断。例如，是否在保持本企业对该项目主导权的前提下，引入财务投资者，在该合作项目中享有30％的权益？是否为该财务投资者提供保证本金安全和取得保底收益的保障？
          </div>
        </div>
        <div className="project-container-qa-tab-item">
          <div className="project-container-qa-tab-item-q">
            Q: 保证金是什么？
          </div>
          <div className="project-container-qa-tab-item-a">
            <span>A</span>: 应根据具体的收益权转让合同的条款判断。例如，是否在保持本企业对该项目主导权的前提下，引入财务投资者，在该合作项目中享有30％的权益？
          </div>
        </div>
        <div className="project-container-qa-tab-item">
          <div className="project-container-qa-tab-item-q">
            Q: 权益可靠吗？
          </div>
          <div className="project-container-qa-tab-item-a">
            <span>A</span>: 应根据具体的收益权转让合同的条款判断。例如，是否在保持本企业对该项目主导权的前提下，引入财务投资者，在该合作项目中享有30％的权益？是否为该财务投资者提供保证本金安全和取得保底收益的保障？
          </div>
        </div>
        <div className="project-container-qa-tab-split"></div>
        <HomeIntro type="youyu" className="project-container-qa-tab-intro" />
      </div>
    );
  }
}

QA.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QA);
