import React from 'react'
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

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onclick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='about' onclick={toggle}>About</SideBarLink>
          <SideBarLink to='discover' onclick={toggle}>Experience</SideBarLink>
          <SideBarLink to='projects' onclick={toggle}>Projects</SideBarLink>
          <SideBarLink to='contact' onclick={toggle}>Contact</SideBarLink>
        </SideBarMenu>
        
        <SideBtnWrap>
          <SideBarBtnResume to='/'>Resume</SideBarBtnResume>
        </SideBtnWrap>
      
      </SideBarWrapper>
    </SideBarContainer>
  )
};

export default Sidebar;
