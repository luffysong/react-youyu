/**
 * UploadButton
 * const uploadParams = {
      success(data) {
        console.log(data, 'suc');
      },
      progress(data) {
        console.log(data, 'pro');
      },
      error(msg) {
        console.log(msg, 'err');
      },
      params: {
        'content-length-range': '100, 1000000',
      }
    };
 *
 * <UploadButton {...uploadParams}/>

 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import axios from 'axios';
import _ from 'lodash';
import config from '../../config';
import qs from 'query-string';

/**
 * Internal dependencies
 */
import './style.less';

const uploadUrlParams = {
  token: config.uploadToken,
  api: '//v0.api.upyun.com',
  name: 'krplus-pic',
  url: 'https://pic.36krcnd.com',
};
const action = uploadUrlParams.api + '/' + uploadUrlParams.name;

class UploadButton extends PureComponent {
  constructor(props) {
    super(props);
    this.bindGetToken = this.getToken.bind(this);
    this.state = {
      params: {
        "bucket": "krplus-pic",
        "expiration": parseInt((new Date().getTime() + 3600 * 1000 * 24 * 365) / 1000, 10),
        "save-key": "/{year}{mon}{day}/{filemd5}{.suffix}",
        "x-gmkerl-thumb": "/rotate/auto",
        'x-gmkerl-type': 'fix_width',
        'x-gmkerl-unsharp': true,
        'allow-file-type': 'jpg,jpeg,png,gif',
        'content-length-range': '5120, 5120000',
        'image-width-range': '20, 1024'
      },
    };
    const {
      success = () => {
      },
      error = () => {
      },
      progress = () => {
      },
      params = {}
    } = props;
    this.propsParmas = {
      success,
      error,
      progress,
      params: _.extend(this.state.params, params),
    };
    // console.log(this.propsParmas);
  }

  getToken(ev) {
    const fd = new FormData();
    const s = this;
    fd.append('file', ev.currentTarget.files[0]);
    return axios.post(uploadUrlParams.token, qs.stringify({
      param: JSON.stringify(s.state.params),
      type: 'pic',
      useOwnOrder: 1
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then((res) => {
      fd.append('policy', res.data.data.policy);
      fd.append('signature', res.data.data.signature);
      this.postImg(fd);
    });
  }

  postImg(fd) {
    const s = this;
    return axios.post(action, fd, {
      onUploadProgress(data) {
        const progress = data.loaded*100/data.total;
        s.propsParmas.progress(progress);
      },
    }).then((res) => {
      const url = `${uploadUrlParams.url}${res.data.url}`;
      s.propsParmas.success(url);
    }, (...err) => {
      s.propsParams.error(err[0].response.data.message);
    });
  }

  render() {

    return (
      <div className="upload-component">
        <b>{this.props.children}</b>
        <input type="file" onChange={this.bindGetToken}/>
      </div>
    );
  }
}

UploadButton.propTypes = {};

export default UploadButton;
