/**
 * Register - Choose
 */

/**
 * External dependencies
 */
import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */

function Choose() {
  return (
    <div className="register-container-choose">
      <Helmet title="开户选择" />
      <h4 className="register-container-choose-title">天金所开户</h4>
      <div className="register-container-choose-sub-title">请先选择开户类型</div>
      <div className="register-container-choose-area">
        <Link to="/register/company" className="register-container-choose-item">
          <img src={require('./imgs/btn_signup_business.svg')} alt="企业开户" />
          <div className="register-container-choose-item-title">
            企业开户
          </div>
          <div className="register-container-choose-item-needs">
            <span>所需资料：</span>社会信用代码&nbsp;&nbsp;营业执照
          </div>
        </Link>
        <Link to="/register/personal" className="register-container-choose-item">
          <img src={require('./imgs/btn_signup_per.svg')} alt="个人开户" />
          <div className="register-container-choose-item-title">
            个人开户
          </div>
          <div className="register-container-choose-item-needs">
            <span>所需资料：</span>身份证&nbsp;&nbsp;个人名片
          </div>
        </Link>
      </div>
      <div className="register-container-choose-desc">
        <h4 className="register-container-choose-desc-title">天金所介绍</h4>
        <p>
          天津金融资产交易所（下称“天金所”）经财政部和天津市人民政府共同批准，于2010年5月21日注册成立，是全国首家金融资产交易所，初始股东为中国长城资产管理公司和天津产权交易中心。成立以来，天金所始终秉承“创新、创业、创造”的企业精神，依托天津自贸区政策优势，率先以规范发展实现了交易规则、交易系统、信息披露、会员服务、服务标准、结算模式的“六统一、六覆盖”，在行业内创造了诸多第一和众多标准，真正形成了全国统一、独立、公开和互联网化的金融资产流转平台。
        </p>
      </div>
    </div>
  );
}

Choose.propTypes = {

};

export default Choose;
