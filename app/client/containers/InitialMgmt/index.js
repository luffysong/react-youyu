/**
 * InitialMgmt
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
import makeSelectInitialMgmt from './selectors';
import UcNavTab from '../../components/UcNavTab';
import UcListItem from '../../components/UcListItem';
import Pagination from '../../components/Pagination';

export class InitialMgmt extends PureComponent {
  render() {
    const navLinks = [
      {
        link: '/uc/initialMgmt/1',
        text: '持有中',
      },
      {
        link: '/uc/initialMgmt/2',
        text: '转让中',
      },
      {
        link: '/uc/initialMgmt/3',
        text: '已转让',
      },
    ];

    return (
      <div className="initial-mgmt-container">
        <Helmet
          title="初始份额管理"
          meta={[
            { name: 'description', content: 'Description of InitialMgmt' },
          ]}
        />
        <div className="initial-mgmt-list">
          <UcNavTab links={navLinks} />
          <UcListItem />
          <UcListItem />
          <UcListItem />
          <UcListItem />
          <UcListItem />
          <UcListItem />
          <UcListItem />
          <UcListItem />
          <UcListItem />
          <UcListItem />
        </div>
        <Pagination className="initial-mgmt-pagination" />
      </div>
    );
  }
}

InitialMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  InitialMgmt: makeSelectInitialMgmt(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialMgmt);
