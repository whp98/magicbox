import React from 'react';
import { FaGrimace, FaHome, FaRegChartBar } from 'react-icons/fa';

const SidebarData = [
  {
    title: '主页',
    path: '/',
    icon: <FaRegChartBar />,
  },
  {
    title: '文件重命名',
    path: '/fileRename',
    icon: <FaHome />,
  },
  {
    title: '错误404',
    path: '/404',
    icon: <FaGrimace />,
  },
];
export default SidebarData;
