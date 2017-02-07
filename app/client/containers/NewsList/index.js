/**
 * NewsList
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

/**
 * Internal dependencies
 */
import './style.less';
import makeSelectNewsList from './selectors';
import NewsItem from '../../components/NewsItem';
import Pagination from '../../components/Pagination';

export class NewsList extends PureComponent {
  render() {
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
              Array(10).fill(0).map((item, index) => <NewsItem key={`news-item-${index}`} />)
            }
          </div>
          <Pagination className="news-list-pagination" />
        </div>
      </div>
    );
  }
}

NewsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NewsList: makeSelectNewsList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
