import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
  Nav, 
  NavBarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavResumeBtnLink
} from './NavBarElements'


const Navbar = () => {
  return (
    // "<>, </> are called fragments"
    <>  
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>Nikhil Raina</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
          {/* These would lead to the IDs on the Div for the respective Links */}
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="experience">Experience</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem> 
          </NavMenu>
          <NavBtn>
            <NavResumeBtnLink to="/resume">Resume</NavResumeBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default Navbar
