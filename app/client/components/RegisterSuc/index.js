/**
 * QuoteSuc
 */

/**
 * External dependencies
 */
import React, {PureComponent} from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './style.less';

class RegisterSuc extends PureComponent {
  render() {
    return (
      <div className="register-suc text-center">
        <div className="dis-in-block">
          <img className="suc-logo" src={require('./imgs/submitSuc.png')} alt=""/>
          <section className="submit-suc">提交完成</section>
          <section className="suc-tip">请您请于7个工作日将贵单位如下资质邮寄至我公司，我们将在收到您合格资质后的1个工作日进行审核。</section>
          <section className="list-section">
            <section className="list-title">资质提供 :</section>
            <section className="list-content">
              1、公司章程或合伙协议、授权委托书；
            </section>
            <section className="list-content">
              2、企业法人营业执照副本复印件、组织机构代码证复印件、税务登记证复印件；
            </section>
            <section className="list-content">
              3、法定代表人身份证明及身份证复印件；
            </section>
            <section className="list-tip">
              以上材料中均需加盖本单位公章的纸质文件，并注明“本企业（或组织）对提交资料的真实性负法律责任”。
            </section>
          </section>
          <section className="list-section">
            <section className="list-title">邮寄地址 :</section>
            <section className="list-content">
              北京市海淀区海淀大街34号海置创投大厦5层  xxx收
            </section>
          </section>
        </div>

        <Link to='/help' activeClassName="active" className="next-btn">了解下平台交易细则</Link>
      </div>
    );
  }
}

export default RegisterSuc;
