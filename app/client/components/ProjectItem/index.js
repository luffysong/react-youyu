/**
 * ProjectItem
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import { take } from 'lodash';
import { Link } from 'react-router';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.less';
import { numComma } from '../../utils/utils';
import ProjectInfoBar from '../ProjectInfoBar';

class ProjectItem extends PureComponent {
  renderList(list) {
    return <table className="transfer-info">
      <tbody>
        {
          list && list.length && take(list, 3).map((item, index) => {
            return <tr className="transfer-info-item" key={`transfer-info-item-${index}`}>
              <td className="item-info">
                <span>转让价格：</span>
                <span className="font-white">￥{numComma(item.price)}元</span>
              </td>
              <td>
                <span>转让份额：</span>
                <span className="font-white">{item.share}%</span>
              </td>
              <td>
                <span>转让方：</span>
                <span>{item.transferor}</span>
              </td>
            </tr>;
          })
        }
      </tbody>
    </table>;
  }

  render() {
    const { loading, data, className } = this.props;

    const classes = classnames([
      'project-item-component',
      className,
      {
        loading,
      },
    ]);

    if (loading) {
      return <div className={classes}>
        <div className="cover loading"></div>
      </div>;
    }

    if (!data) {
      return null;
    }

    const projectInfo = [
      {
        name: '制片方',
        value: data.project.producer,
      },
      {
        name: '转让份额',
        value: data.project.transferable_ratio + '%',
      },
      {
        name: '挂牌标的',
        value: data.listing && data.listing.length,
      },
    ];

    return <Link to={`/project/${data.project.id}`} className={classes}>
      <div className="cover" style={{ backgroundImage: `url(${data.project && data.project.list_img})`}}></div>
      <div className="info">
        <div className="info-title">
          {data.project ? data.project.name : ''}
          <div className="info-title-tag">
            {data.project ? data.project.stage : ''}
          </div>
        </div>
        <ProjectInfoBar data={projectInfo} />
        { this.renderList(data.listing) }
        {
          data.listing && data.listing.length && data.listing.length > 3
          ? <a className="more-link" href="">还有{data.listing.length - 3}个转让...</a>
          : null
        }
      </div>
    </Link>;
  }
}

ProjectItem.propTypes = {
  className: React.PropTypes.string,
  data: React.PropTypes.object,
  loading: React.PropTypes.bool,
};

export default ProjectItem;
