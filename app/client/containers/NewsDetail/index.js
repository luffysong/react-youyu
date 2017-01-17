/**
 * NewsDetail
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
import makeSelectNewsDetail from './selectors';

export class NewsDetail extends PureComponent {
  render() {
    return (
      <div className="news-detail-container">
        <Helmet
          title="NewsDetail"
          meta={[
            { name: 'description', content: 'Description of NewsDetail' },
          ]}
        />
        NewsDetail
      </div>
    );
  }
}

NewsDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NewsDetail: makeSelectNewsDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
