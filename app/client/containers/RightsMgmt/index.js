/**
 * RightsMgmt
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
import makeSelectRightsMgmt from './selectors';
import UcNavTab from '../../components/UcNavTab';
import UcListItem from '../../components/UcListItem';
import Pagination from '../../components/Pagination';

export class RightsMgmt extends PureComponent {
  render() {
    const navLinks = [
      {
        link: '/uc/rightsMgmt/1',
        text: '持有中',
      },
      {
        link: '/uc/rightsMgmt/2',
        text: '转让中',
      },
      {
        link: '/uc/rightsMgmt/3',
        text: '已转让',
      },
    ];

    return (
      <div className="rights-mgmt-container">
        <Helmet
          title="影视收益权管理"
          meta={[
            { name: 'description', content: 'Description of RightsMgmt' },
          ]}
        />
        <div className="rights-mgmt-list">
          <UcNavTab links={navLinks} />
          {
            Array(10).fill().map((_, index) => {
              return <UcListItem type="rights" key={`rights-list-item-${index}`} />;
            })
          }
        </div>
        <Pagination className="rights-mgmt-pagination" />
      </div>
    );
  }
}

RightsMgmt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RightsMgmt: makeSelectRightsMgmt(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightsMgmt);
