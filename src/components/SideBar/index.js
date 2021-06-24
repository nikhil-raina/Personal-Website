import React from 'react'
import { NavBtn, NavResumeBtnLink } from '../NavBar/NavBarElements'
import {
  SideBarContainer,
  Icon,
  CloseIcon, 
  SideBarBtnResume, 
  SideBarLink, 
  SideBarWrapper, 
  SideBtnWrap,
  SideBarMenu
} from './SideBarElements'

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='about'>About</SideBarLink>
          <SideBarLink to='discover'>Experience</SideBarLink>
          <SideBarLink to='projects'>Projects</SideBarLink>
          <SideBarLink to='contact'>Contact</SideBarLink>
        </SideBarMenu>
        
        <SideBtnWrap>
          <SideBarBtnResume to='/'>Resume</SideBarBtnResume>
        </SideBtnWrap>
      
      </SideBarWrapper>
    </SideBarContainer>
  )
};

export default Sidebar;
