/**
 * HelpList
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
import HelpListItems from '../../components/HelpListItems';
import Pagination from '../../components/Pagination';
import * as actions from './actions';

export class HelpList extends PureComponent {
  componentDidMount() {
    const columnId = this.props.params.id;
    const query = this.props.location.query;
    const page = query.page ? query.page : 1;
    if (!this.props.listData) {
      this.props.loadList(columnId, page);
    }
  }

  render() {
    const { listLoading, listData } = this.props;

    return (
      <div className="help-list-container">
        <Helmet
          title="帮助中心"
          meta={[
            { name: 'description', content: '帮助中心' },
          ]}
        />
        <HelpListItems loading={listLoading} data={listData} />
        <Pagination />
      </div>
    );
  }
}

HelpList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const helpList = state.helpList;
  const columnId = props.params.id;
  const query = props.location.query;
  const page = query.page ? query.page : 1;

  return {
    listLoading: helpList.getIn(['loading', columnId, page]),
    listData: helpList.getIn(['data', columnId, page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadList: (columnId, page) => dispatch(actions.loadList(columnId, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpList);
