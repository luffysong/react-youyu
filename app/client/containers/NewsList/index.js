/**
 * NewsList
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import NewsItem from '../../components/NewsItem';
import Pagination from '../../components/Pagination';
import * as actions from './actions';

const pid = 2;

export class NewsList extends PureComponent {
  constructor(props) {
    super(props);
    this.onPageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.query;
    const page = query.page ? query.page : 1;
    if (!this.props.newsListData) {
      this.props.loadNewsList(pid, page);
    }
  }

  componentDidUpdate(prevProps) {
    const query = this.props.location.query;
    const page = query.page ? query.page : 1;
    const prevQuery = prevProps.location.query;
    const oldPage = prevQuery.page ? prevQuery.page : 1;

    if (page !== oldPage && !this.props.newsListData) {
      this.props.loadNewsList(pid, page);
    }
  }

  renderLoading() {
    return Array(10).fill(0).map((item, index) => <NewsItem loading={true} key={`news-item-${index}`} />);
  }

  renderList(data) {
    return data && data.length && data.map((item, index) => {
      return <NewsItem loading={false} data={item} key={`news-item-${index}`} />;
    });
  }

  handlePageChange(page) {
    if (!page || page.selected === undefined) {
      return false;
    }
    this.props.router.push({
      pathname: '/news/list',
      query: {
        page: parseInt(page.selected + 1, 10),
      }
    });
  }

  render() {
    const { newsListLoading, newsListData } = this.props;
    const pageInfo = {
      currentPage: get(newsListData, 'current_page'),
      lastPage: get(newsListData, 'last_page'),
    };

    return (
      <div className="news-list-container">
        <Helmet
          title="新闻公告"
          meta={[
            { name: 'description', content: 'Description of NewsList' },
          ]}
        />
        <div className="container news-list-wrapper">
          <div className="news-list-list">
            {
              newsListLoading
              ? this.renderLoading()
              : this.renderList(get(newsListData, 'data'))
            }
          </div>
          {
            newsListLoading
            ? null
            : <Pagination pageInfo={pageInfo} onPageChange={this.onPageChange} className="news-list-pagination" />
          }
        </div>
      </div>
    );
  }
}

NewsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const newsList = state.newsList;
  const query = props.location.query;
  const page = query.page ? query.page : 1;

  return {
    newsListLoading: newsList.getIn(['newsListLoading', pid]),
    newsListData: newsList.getIn(['newsListData', pid, page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadNewsList: (pid, page) => dispatch(actions.loadNewsList(pid, page))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
