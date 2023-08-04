import React from 'react';
import { MdDriveFileMove, MdInfo, MdLibraryMusic } from 'react-icons/md';

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
  {
    title: '汽水音乐歌单',
    path: '/qishui',
    icon: <MdLibraryMusic />,
  },
];
export default SidebarData;
