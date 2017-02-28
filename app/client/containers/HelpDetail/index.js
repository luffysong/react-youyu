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
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../../components/Button';
import * as actions from './actions';
import { removeInlineStyle } from '../../utils/utils';
import message from '../../components/Message';
import Tracker from '../../components/Tracker';

export class HelpDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.back = this.handleBack.bind(this);
    this.state = {
      buttons: {
        support: false,
        unsupport: false
      },
    };
    this.support = (type) => this.handleSolved.bind(this, type);
  }

  componentDidMount() {
    const localMark = this.getItemMark()
    if (!this.props.data) {
      const id = this.props.params.id;
      this.props.loadDetail(id);
    }
    this.setState({
      buttons: {
        support: localMark === 'like',
        unsupport: localMark === 'dislike'
      },
    });
  }
  componentDidUpdate(props) {
    const localMark = this.getItemMark()
    const oldId = props.params.id;
    const newId = this.props.params.id;

    if (oldId !== newId && !this.props.data) {
      this.props.loadDetail(newId);
      this.setState({
        buttons: {
          support: localMark === 'like',
          unsupport: localMark === 'dislike'
        },
      });
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

  createMarkup(html) {
    if (!html) {
      return {
        __html: '',
      };
    }

    return {
      __html: removeInlineStyle(html),
    };
  }

  renderRelated(data) {
    if (!data || !data.lenght) {
      return null;
    }
    return (
      <div className="help-detail-container-bottom">
        <h3>相关问题</h3>
        <ul className="help-detail-container-related">
          {
            data && data.map((item, index) => {
              return <li key={`list-item-${index}`}>
                <Link to={`/help/detail/${item.id}`}>{item.title}</Link>
              </li>
            })
          }
        </ul>
      </div>
    );
  }

  handleSolved(type) {
    const id = this.props.params.id;
    if (this.state.buttons.support || this.state.buttons.unsupport) {
      message.warn('您已经提交过~');
      return false;
    }

    const newState = Object.assign({}, this.state)

    this.props.sendSolve(id, type);

    if (type === 'dislike') {
      newState.buttons.unsupport = true
    }

    if (type === 'like') {
      newState.buttons.support = true
    }

    newState.modalOpen = true

    this.setState(newState)
    this.setItemMarked(type)
  }

  setItemMarked (type) {
    try {
      let voteLocalStr
      let voteLocalObj
      const id = this.props.params.id ? this.props.params.id : 0
      voteLocalStr = localStorage.getItem('voteRecord')
      if (voteLocalStr) {
        voteLocalObj = JSON.parse(voteLocalStr)
      }

      if (!voteLocalStr || !voteLocalObj[`id${id}`]) {
        let paramObj = {...voteLocalObj}
        paramObj[`id${id}`] = type
        localStorage.setItem('voteRecord', JSON.stringify(paramObj))
      }
    } catch (e) {
      console.log('no permision')
    }
  }

  getItemMark () {
    try {
      let voteStr
      let voteJson
      let vote
      voteStr = localStorage.getItem('voteRecord')
      voteJson = JSON.parse(voteStr)
      vote = voteJson[`id${this.props.params.id}`]
      return vote
    } catch (e) {
      return ''
    }
  }

  render() {
    const { loading, data } = this.props;

    if (loading) {
      return (
        <div className="help-detail-container">
          <Helmet title="问题详情" />
          <div className="help-detail-container-top">
            <div className="help-detail-container-back" onClick={this.back}>
              <img src={require('./imgs/btn_back_FAQ.svg')} alt="返回"/>
              <span>返回</span>
            </div>
            <div className="help-detail-container-qa">
              <div className="help-detail-container-qa-q loading">
                <span className="help-detail-container-qa-letter">Q:</span>
                这是一个问题？
              </div>
              <div className="help-detail-container-qa-a loading">
                <span className="help-detail-container-qa-letter">A:</span>
                人生若只如初见，
                何事秋风悲画扇。
                等闲变却故人心，
                却道故人心易变。
                骊山语罢清宵半，
                泪雨霖铃终不怨。
                何如薄幸锦衣郎，
                比翼连枝当日愿。
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="help-detail-container">
        <Helmet title="问题详情" />
        <div className="help-detail-container-top">
          <div className="help-detail-container-back" onClick={this.back}>
            <img src={require('./imgs/btn_back_FAQ.svg')} alt="返回"/>
            <span>返回</span>
          </div>
          <div className="help-detail-container-qa">
            <div className="help-detail-container-qa-q">
              <span className="help-detail-container-qa-letter">Q:</span>
              {get(data, 'title')}
            </div>
            <div className="help-detail-container-qa-a">
              <span className="help-detail-container-qa-letter">A:</span>
              <div dangerouslySetInnerHTML={this.createMarkup(get(data, 'content'))}></div>
            </div>
          </div>
          <div className="help-detail-container-operate">
            <Button className="help-detail-container-operate-btn solved-btn" onClick={this.support('like')}>
              {
                this.state.buttons.support
                ? <img src={require('./imgs/icon_like_FAQ_pre.svg')} alt="已解决"/>
                : <img src={require('./imgs/icon_like_FAQ_nor.svg')} alt="已解决"/>
              }
              <span>已解决</span>
            </Button>
            <Button className="help-detail-container-operate-btn" onClick={this.support('dislike')}>
              {
                this.state.buttons.unsupport
                ? <img src={require('./imgs/icon_unlike_FAQ_pre.svg')} alt="未解决"/>
                : <img src={require('./imgs/icon_unlike_FAQ_nor.svg')} alt="未解决"/>
              }
              <span>未解决</span>
            </Button>
          </div>
        </div>
        {this.renderRelated(get(data, 'correlation_list'))}
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
    sendSolve: (id, type) => dispatch(actions.sendSolve(id, type)),
  };
}

export default Tracker(connect(mapStateToProps, mapDispatchToProps)(HelpDetail));
