/**
 * HelpList
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
import makeSelectHelpList from './selectors';
import LeftSideBar from '../../components/LeftSideBar';
import HelpListMenu from '../../components/HelpListMenu';
import HelpListItems from '../../components/HelpListItems';
import Pagination from '../../components/Pagination';

export class HelpList extends PureComponent {
  render() {
    return (
      <div className="help-list-container">
        <Helmet
          title="帮助中心"
          meta={[
            { name: 'description', content: '帮助中心' },
          ]}
        />
        <div className="help-list-wrapper container">
          <LeftSideBar className="help-list-left-bar">
            <div className="help-list-left-bar-top">
              常见问题
            </div>
            <HelpListMenu />
          </LeftSideBar>
          <HelpListItems />
        </div>
        <div className="help-list-pagination-wrapper container">
          <Pagination />
        </div>
      </div>
    );
  }
}

HelpList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HelpList: makeSelectHelpList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpList);
