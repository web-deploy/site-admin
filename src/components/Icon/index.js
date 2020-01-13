import React from 'react';
import { Icon as AntIcon } from 'antd';

const IconFont = AntIcon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1598136_48t5txrmrnp.js',
});

const Icon = ({ type, size, color, onClick }) => {
  return <IconFont type={type} style={{ fontSize: size, color }} onClick={onClick} />;
}

export default Icon;
