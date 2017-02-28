import React from 'react';
import { Link } from 'react-router';
import './style.less';
import Tracker from '../../components/Tracker';

function PersonalResult() {
  return (
    <div className="personal-result">
      <div className="ico center">
        <div className="path1"></div>
        <div className="path2">
          <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 60 C 75 80, 105 80, 110 60" strokeWidth="3" stroke="black" fill="transparent" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <h4 className="title center">提交完成</h4>
      <p className="desc center">
        我们会在3个工作日内联系您
      </p>
      <Link to="/class"
            className="next-btn center">了解下平台交易规则</Link>
    </div>
  )
}
export default Tracker(PersonalResult);
