/**
 * InitialMgmt
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get, fill } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import UcNavTab from '../../components/UcNavTab';
import UcListItem from '../../components/UcListItem';
import Pagination from '../../components/Pagination';
import Empty from '../../components/Empty';
import Modal from '../../components/Modal';
import * as actions from './actions';

export class InitialMgmt extends PureComponent {
  constructor(props) {
    super(props);
    const status = this.props.params.status;
    this.state = {
      status,
      modalIsOpen: false,
      calcleId: '',
      STATUS: {
        holding: '持有中',
        listing: '转让中',
        finished: '已转让',
      },
    };
    this.onPageChange = this.handlePageChange.bind(this);
    this.cancel = id => this.handleCancel.bind(this, id);
    this.confirm = this.handleConfirm.bind(this);
    this.back = this.handleBack.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.query;
    const page = query.page || '1';
    this.props.getInitialList(this.state.status, page);
  }

  componentDidUpdate(prevProps) {
    const query = this.props.location.query;
    const page = query.page || '1';
    const prevQuery = prevProps.location.query;
    const prevPage = prevQuery.page;

    if (prevPage && (page !== prevPage)) {
      this.props.getInitialList(this.state.status, page);
    }
  }

  handlePageChange(page) {
    if (!page || page.selected === undefined) {
      return false;
    }
    this.props.router.push({
      pathname: `/uc/initialMgmt/${this.state.status}`,
      query: {
        page: '' + (page.selected + 1),
      }
    });
  }

  handleCancel(id) {
    this.setState({
      cancelId: id,
    }, () => {
      this.openModal();
    });
  }

  handleConfirm() {
    this.props.cancelTransfer(this.state.cancelId, () => {
      this.closeModal();
      this.props.getRightsList(this.state.status, '1');
    });
  }

  handleBack() {
    this.setState({
      cancelId: '',
    }, () => {
      this.closeModal();
    });
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  renderLoading() {
    return fill(Array(3), 0).map((_, index) => {
      return <UcListItem type="initial" loading={true} key={`initial-list-item-${index}`} />;
    });
  }

  renderList(data) {
    if (!data || !data.length) {
      return <Empty text="暂时没有数据哦" />;
    }

    return data.map((item, index) => {
      return <UcListItem type="initial" data={item} status={this.state.status} cancel={this.cancel} key={`initial-list-item-${index}`} />;
    });
  }

  render() {
    const navLinks = [];
    const { initialListData, initialListLoading } = this.props;
    const pageInfo = {
      currentPage: get(initialListData, 'current_page'),
      lastPage: get(initialListData, 'last_page'),
    };
    const listData = get(initialListData, 'data');

    for (let item in this.state.STATUS) {
      if (this.state.STATUS.hasOwnProperty(item)) {
        navLinks.push({
          link: `/uc/initialMgmt/${item}`,
          text: this.state.STATUS[item],
        });
      }
    }

    return (
      <div className="initial-mgmt-container">
        <Helmet title="初始份额管理" />
        <Modal title="确认要撤销挂牌吗" content="撤销后再次挂牌需要重新审核" isOpen={this.state.modalIsOpen} confirm={this.confirm} back={this.back} />
        <div className="initial-mgmt-list">
          <UcNavTab links={navLinks} />
          {
            initialListLoading
            ? this.renderLoading()
            : this.renderList(listData)
          }
        </div>
        {
          (initialListLoading || (!initialListLoading && !(listData && listData.length)))
          ? null
          : <Pagination pageInfo={pageInfo} onPageChange={this.onPageChange} className="initial-mgmt-pagination" />
        }
      </div>
    );
  }
}

InitialMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const initialMgmt = state.initialMgmt;
  const status = props.params.status;
  const query = props.location.query;
  const page = query.page || '1';

  return {
    initialListData: initialMgmt.getIn(['initialListData', status, page]),
    initialListLoading: initialMgmt.getIn(['initialListLoading', status, page]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getInitialList: (status, page) => dispatch(actions.getInitialList(status, page)),
    cancelTransfer: (id, sucCallback) => dispatch(actions.cancelTransfer(id, sucCallback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialMgmt);
