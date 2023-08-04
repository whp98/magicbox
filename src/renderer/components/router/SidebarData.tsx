import React from 'react';
import { MdDriveFileMove, MdInfo } from 'react-icons/md';

const SidebarData = [
  {
    title: '关于',
    path: '/',
    icon: <MdInfo />,
  },
  {
    title: '文件重命名',
    path: '/fileRename',
    icon: <MdDriveFileMove />,
  },
];
export default SidebarData;
