/**
 * HelpDetail
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../../components/Button';
import * as actions from './actions';

export class HelpDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.back = this.handleBack.bind(this);
  }

  componentDidMount() {
    if (!this.props.data) {
      const id = this.props.params.id;
      this.props.loadDetail(id);
    }
  }

  componentDidUpdate(props) {
    const oldId = props.params.id;
    const newId = this.props.params.id;

    if (oldId !== newId && !this.props.data) {
      this.props.loadDetail(newId);
    }
  }

  handleBack() {
    if (history.length > 2) {
      history.go(-1);
    } else {
      this.props.router.push({
        pathname: '/help/list',
      });
    }
  }

  render() {
    return (
      <div className="help-detail-container">
        <Helmet
          title="问题详情"
          meta={[
            { name: 'description', content: 'Description of HelpDetail' },
          ]}
        />
        <div className="help-detail-container-top">
          <div className="help-detail-container-back" onClick={this.back}>
            <img src={require('./imgs/btn_back_FAQ.svg')} alt="返回"/>
            <span>返回</span>
          </div>
          <div className="help-detail-container-qa">
            <div className="help-detail-container-qa-q">
              <span className="help-detail-container-qa-letter">Q:</span>
              互联网非公开股权投资是不是涉及非法融资？
            </div>
            <div className="help-detail-container-qa-a">
              <span className="help-detail-container-qa-letter">A:</span>
              互联网非公开股权投资模式不是非法集资。根据《关于取缔非法金融机构和非法金融业务活动中有关问题的通知》规定，非法集资是指单位或者个人未依照法定程序经有关部门批准，以发行股票、债券、 彩票、投资基金证券或者其他债权凭证的方式向社会公众筹集资金。互联网非公开股权投资严格向经认证合格投资人披露融资项目信息，由合格投资人定向认购，投资人不超过200人且对象特定，符合《公司法》、《证券法》、中国证券业协会《私募股权众筹融资管理办法》（试行）（征求意见稿）和《场外证券业务备案管理办法》等相关法律法规的规定。
            </div>
          </div>
          <div className="help-detail-container-operate">
            <Button className="help-detail-container-operate-btn solved-btn">
              <img src={require('./imgs/icon_like_FAQ_nor.svg')} alt="已解决"/>
              <span>已解决</span>
            </Button>
            <Button className="help-detail-container-operate-btn">
              <img src={require('./imgs/icon_unlike_FAQ_nor.svg')} alt="未解决"/>
              <span>未解决</span>
            </Button>
          </div>
        </div>
        <div className="help-detail-container-bottom">
          <h3>相关问题</h3>
          <ul className="help-detail-container-related">
            <li>
              <Link to="/">互联网非公开股权投资是不是涉及非法融资？</Link>
            </li>
            <li>
              <Link to="/">互联网非公开股权投资是不是涉及非法融资？</Link>
            </li>
            <li>
              <Link to="/">互联网非公开股权投资是不是涉及非法融资？</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

HelpDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapStateToProps(state, props) {
  const helpDetail = state.helpDetail;
  const id = props.params.id;

  return {
    loading: helpDetail.getIn(['loading', id]),
    data: helpDetail.getIn(['data', id]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadDetail: (id) => dispatch(actions.loadNewsDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpDetail);
