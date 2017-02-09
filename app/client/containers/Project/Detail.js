/**
 * Detail
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

export class Detail extends PureComponent {
  render() {
    return (
      <div className="project-container-detail-tab">
        <Helmet
          title="项目详情"
          meta={[
            { name: 'description', content: 'Description of Detail' },
          ]}
        />
        <img src={require('./imgs/cover.jpg')} alt="项目详情" />
      </div>
    );
  }
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const project = state.project;

  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
