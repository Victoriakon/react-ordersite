import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Sunday</SidebarLink>
        <SidebarLink to='/'>Monday</SidebarLink>
        <SidebarLink to='/'>Tuesday</SidebarLink>
        <SidebarLink to='/'>Wednesday</SidebarLink>
        <SidebarLink to='/'>Thursday</SidebarLink>
        <SidebarLink to='/'>Friday till 13:00</SidebarLink>
    
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;