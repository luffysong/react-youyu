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
import { toPercent } from '../../utils/math';
import ProjectInfoBar from '../ProjectInfoBar';
import CountDown from '../CountDown';
import { movie_stage } from '../../utils/dict.json';

class ProjectItem extends PureComponent {
  getStage(stageText) {
    let stage = '';
    Object.keys(movie_stage).forEach(item => {
      if (movie_stage[item] === stageText) {
        stage = item;
      }
    });
    return stage;
  }

  renderList(list, type) {
    if (!(list && list.length)) {
      return <div className="list-empty">没有可转让的标的</div>;
    }

    return <table className="transfer-info">
      <tbody>
        {
          take(list, 3).map((item, index) => {
            return <tr className={`transfer-info-item transfer-info-item-${type}`} key={`transfer-info-item-${index}`}>
              <td className="item-info">
                <span>转让价格：</span>
                <span className="font-white">￥{numComma(item.price)}元</span>
              </td>
              <td>
                <span>转让份额：</span>
                <span className="font-white">{toPercent(item.share)}</span>
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
                      <CountDown remain={get(item, 'time_remain')} />
                    </span>
                  </td>
                : null
              }
            </tr>;
          })
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
        value: toPercent(get(data, 'project.listing_share')),
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
            <i className={`icon icon-stage-${this.getStage(get(data, 'project.stage'))}`}></i>
            <span className="icon-tag">{get(data, 'project.stage')}</span>
          </div>
        </div>
        <ProjectInfoBar data={projectInfo} />
        { this.renderList(data.listing, type) }
        {
          data.listing && data.listing.length && data.listing.length > 3
          ? <span className={`more-link more-link-${type}`}>还有{data.listing.length - 3}个转让{type === 'list' ? ' >' : '...'}</span>
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
