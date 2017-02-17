/**
 * Detail
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';

export class Detail extends PureComponent {
  render() {
    const { projectLoading, projectData } = this.props;

    if (projectLoading) {
      return <div className="project-container-detail-tab">
        {
          Array(3).fill().map((_, index) => {
            return <div className="placeholder loading" key={`placeholder-${index}`}>
            </div>
          })
        }
      </div>;
    }

    const pics = get(projectData, 'description');

    return (
      <div className="project-container-detail-tab">
        <Helmet title="项目详情" />
        {
          pics && pics.map((item, index) => {
            return <img key={`description-img-${index}`} src={item} alt=""/>
          })
        }
      </div>
    );
  }
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  const project = state.project;
  const id = props.params.id ? props.params.id : 0;

  return {
    projectLoading: project.getIn(['projectLoading', id]),
    projectData: project.getIn(['projectData', id]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
