import React from 'react';
import './style.less';
import RegisterSuc from '../../components/RegisterSuc';
import Tracker from '../../components/Tracker';

function RegisterSucWrapper() {
  return (
    <RegisterSuc></RegisterSuc>
  )
}

export default Tracker(RegisterSucWrapper);
