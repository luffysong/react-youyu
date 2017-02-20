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
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import { numComma } from '../../utils/utils';
import ProjectInfoBar from '../ProjectInfoBar';
import CountDown from '../CountDown';

class ProjectItem extends PureComponent {
  renderList(list) {
    return <table className="transfer-info">
      <tbody>
        {
          list && list.length ? take(list, 3).map((item, index) => {
            return <tr className="transfer-info-item" key={`transfer-info-item-${index}`}>
              <td className="item-info">
                <span>转让价格：</span>
                <span className="font-white">￥{numComma(item.price)}元</span>
              </td>
              <td>
                <span>转让份额：</span>
                <span className="font-white">{item.share * 100}%</span>
              </td>
              <td>
                <span>转让方：</span>
                <span>{item.transferor}</span>
              </td>
              {
                this.props.type === 'list'
                ? <td>
                    <span>剩余时间：</span>
                    <span>
                      <CountDown remain={12400} />
                    </span>
                  </td>
                : null
              }
            </tr>;
          }) : <div className="list-empty">该项目已上映，没有可转让的标的</div>
        }
      </tbody>
    </table>;
  }

  render() {
    const { type, loading, data, className } = this.props;

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
        value: get(data, 'project.producer'),
      },
      {
        name: '转让份额',
        value: get(data, 'project.listing_share') * 100 + '%',
      },
      {
        name: '挂牌标的',
        value: get(data, 'project.listing_count'),
      },
    ];

    if (type === 'list') {
      projectInfo.push({
        name: '转让总价',
        value: numComma(get(data, 'project.listing_price'), false, true),
      });
    }

    return <Link to={`/project/${get(data, 'project.id')}`} className={classes}>
      <div className="cover" style={{ backgroundImage: `url(${get(data, 'project.list_img')})`}}></div>
      <div className="info">
        <div className="info-title">
          <span>{get(data, 'project.name')}</span>
          <div className="info-title-tag">
            {get(data, 'project.stage')}
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
  type: React.PropTypes.string,
  data: React.PropTypes.object,
  loading: React.PropTypes.bool,
};

export default ProjectItem;
