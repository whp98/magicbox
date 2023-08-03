import React from 'react';
import { MdDriveFileMove, MdHome } from 'react-icons/md';

const SidebarData = [
  {
    title: '主页',
    path: '/',
    icon: <MdHome />,
  },
  {
    title: '文件重命名',
    path: '/fileRename',
    icon: <MdDriveFileMove />,
  },
];
export default SidebarData;
