/**
 * Accept
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
import StepNav from '../../components/StepNav';
import Tracker from '../../components/Tracker';

export class Accept extends PureComponent {
  render() {
    const { children } = this.props;
    const steps = [
      {
        name: '认购申请',
        link: '/accept/confirm',
      },
      {
        name: '支付保证金',
        link: '/accept/pay',
      },
      {
        name: '与转达方达成意向',
      },
      {
        name: '签署协议',
      },
      {
        name: '支付尾款',
      },
    ];
    const currentPath = this.props.location.pathname;

    return (
      <div className="accept-container">
        <Helmet
          title="摘牌"
          meta={[
            { name: 'description', content: 'Description of Accept' },
          ]}
        />
        <div className="accept-wrapper container">
          <StepNav steps={steps} currentPath={currentPath} />
          {children}
        </div>
      </div>
    );
  }
}

Accept.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(Accept));
