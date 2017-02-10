/**
 * NewsDetail
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
import ShareBar from '../../components/ShareBar';
import * as actions from './actions';

export class NewsDetail extends PureComponent {
  componentDidMount() {
    const id = this.props.params.id ? this.props.params.id : 1;
    this.props.loadNewsDetail(id);
  }

  render() {
    return (
      <div className="news-detail-container">
        <Helmet
          title="新闻详情"
          meta={[
            { name: 'description', content: 'Description of NewsDetail' },
          ]}
        />
        <div className="container news-detail-wrapper">
          <h1 className="news-detail-title">你适合投资影视收益权吗？</h1>
          <div className="news-detail-time">2015年6月30日</div>
          <div className="news-detail-content article-format">
            <p>早期互联网创业者，尤其是初次创业者， 好产品能做出来，对融资却是一头雾水，刚接触投资人，如何谈判、股份占多少，如何选择投资人，基本没有概念。常常导致项目价值被低估，或者投资人资源没有得到充分发挥。</p>
            <p>经过三年多来与互联网创业者的全面接触和深入报道，36氪深切感到早期互联网创业者与投资人之间的沟通障碍，为解决早期创业所面临的资金障碍，36氪从2014年4月22日起正式启动了氪空间项目，为互联网创业初期的创业者提供一个线下的协同办公空间，在这里解决早期创业的资源障碍。</p>
            <img src="https://drscdn.500px.org/photo/58848202/m%3D2048/545e138ead0f1644aae2db7c71baff51" alt="" />
            <p>在这里，我们实现两件事：</p>
            <p>不占股份，完全免费</p>
            <p>这是中国唯一一个不收取任何费用，不占任何股份，完全免费提供给早期创业者的办公空间。提着电脑，创业者就可以入驻，得到创业第一步所需的资源与服务。</p>
          </div>
          <div className="news-detail-split"></div>
          <ShareBar className="news-detail-share" />
        </div>
      </div>
    );
  }
}

NewsDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const newsDetail = state.newsDetail;
  const id = props.params.id ? props.params.id : 1;

  return {
    newsDetailLoading: newsDetail.getIn(['newsDetailLoading', id]),
    newsDetailData: newsDetail.getIn(['newsDetailData', id]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadNewsDetail: (id) => dispatch(actions.loadNewsDetail(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
