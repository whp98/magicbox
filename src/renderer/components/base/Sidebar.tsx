import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { MdLightMode, MdModeNight } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { RootState } from '@/renderer/store';
import { setDarkTheme } from '@/renderer/store/slices/appScreenSlice';
import SidebarData from './SidebarData';

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

const SidebarMenu = styled.div<{ $close: boolean }>`
  width: 20%;
  height: 100vh;
  background-color: #000080;
  position: fixed;
  top: 0;
  left: ${({ $close }) => ($close ? '0' : '-100%')};
  /* transition: 0.1s; */
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 40px;
  padding: 1rem 0 1.25rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 15px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    //height: 45px;
    text-align: center;
    //border-radius: 5px;
    //margin: 0 2rem;
  }
`;

const Sidebar: React.FunctionComponent = () => {
  const [close, setClose] = useState(true);
  const darkTheme = useSelector((state: RootState) => state.appScreen.darkTheme);
  const dispatch = useDispatch();

  const handleChangeTheme = (): void => {
    dispatch(setDarkTheme(!darkTheme));
  };
  const showSidebar = () => setClose(!close);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={showSidebar}
            >
              <FaBars />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Magic Box
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleChangeTheme}
            >
              {darkTheme ? <MdLightMode /> : <MdModeNight />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <SidebarMenu $close={close}>
        <MenuIconClose to="#" onClick={showSidebar}>
          <FaTimes />
        </MenuIconClose>
        {SidebarData.map((item) => (
          <MenuItems key={item.title}>
            <MenuItemLinks to={item.path}>
              {item.icon}
              <span style={{ marginLeft: '16px' }}>{item.title}</span>
            </MenuItemLinks>
          </MenuItems>
        ))}
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
