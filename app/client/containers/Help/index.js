/**
 * Help
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
import LeftSideBar from '../../components/LeftSideBar';
import LeftSideMenu from '../../components/LeftSideMenu';
import RouteTransition from '../../components/RouteTransition';
import * as actions from './actions';

export class Help extends PureComponent {
  componentDidMount() {
    if (!this.props.menuData) {
      this.props.loadMenu();
    }
  }

  render() {
    const { children, menuLoading, menuData } = this.props;

    return (
      <div className="help-container">
        <Helmet
          title="帮助中心"
          meta={[
            { name: 'description', content: 'Description of Help' },
          ]}
        />
        <div className="help-wrapper container">
          <LeftSideBar className="help-left-bar">
            <div className="help-left-bar-top">
              常见问题
            </div>
            <LeftSideMenu loading={menuLoading} data={menuData} />
          </LeftSideBar>
          <RouteTransition>
            {children}
          </RouteTransition>
        </div>
      </div>
    );
  }
}

Help.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  const help = state.help;

  return {
    menuLoading: help.get('loading'),
    menuData: help.get('data'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadMenu: () => dispatch(actions.loadMenu()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
