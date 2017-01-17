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

export class NewsList extends PureComponent {
  render() {
    return (
      <div className="news-list-container">
        <Helmet
          title="NewsList"
          meta={[
            { name: 'description', content: 'Description of NewsList' },
          ]}
        />
        NewsList
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
