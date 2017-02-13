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

  render() {
    const { loading, data } = this.props;

    if (loading) {
      return <h1>Loading...</h1>;
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
