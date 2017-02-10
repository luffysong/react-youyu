/**
 * NewsDetail
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import moment from 'moment';
import { removeInlineStyle } from '../../utils/utils';

/**
 * Internal dependencies
 */
import './style.less';
import ShareBar from '../../components/ShareBar';
import * as actions from './actions';

export class NewsDetail extends PureComponent {
  componentDidMount() {
    const id = this.props.params.id ? this.props.params.id : 1;
    if (!this.props.newsDetailData) {
      this.props.loadNewsDetail(id);
    }
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.params.id;
    const newId = this.props.params.id;

    if (oldId !== newId) {
      this.props.loadNewsDetail(newId);
    }
  }

  renderLoading() {
    return <div className="container news-detail-wrapper loading">
      <h1 className="news-detail-title">你适合投资影视收益权吗？</h1>
      <div className="news-detail-time">2015年6月30日</div>
      <div className="news-detail-content"></div>
    </div>;
  }

  createMarkup(html) {
    if (!html) {
      return {
        __html: '',
      };
    }

    return {
      __html: removeInlineStyle(html),
    };
  }

  renderDetail(data) {
    return <div className="container news-detail-wrapper">
      <h1 className="news-detail-title">{get(data, 'title')}</h1>
      <div className="news-detail-time">{moment(get(data, 'published_at')).format('YYYY年MM月DD日')}</div>
      <div className="news-detail-content article-format" dangerouslySetInnerHTML={this.createMarkup(get(data, 'content'))}></div>
      <div className="news-detail-split"></div>
      <ShareBar className="news-detail-share" />
    </div>;
  }

  render() {
    const { newsDetailLoading, newsDetailData } = this.props;

    return (
      <div className="news-detail-container">
        <Helmet
          title="新闻详情"
          meta={[
            { name: 'description', content: 'Description of NewsDetail' },
          ]}
        />
        {
          newsDetailLoading
          ? this.renderLoading()
          : this.renderDetail(newsDetailData)
        }
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
