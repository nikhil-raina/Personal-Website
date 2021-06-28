import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

// var Brown_Dark = '#39332C';
// var Black_Shade = '#1A1B1A';
// var Brown_Light = '#635B53';
// var Brown_Skin = '#9D9085';
// var White_Off = '#F4F4F4';
// var White = '#FFFFFF';

export const Nav = styled.nav`
  background: #1A1B1A;
  height: 80px;
  ${'' /* margin-top: -80px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 3000px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex; 
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width : 768px) {
    display: block;
    position: absolute;
    top: 0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  ${'' /* margin-right: -22px; */}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 20px;
`;


export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  ${'' /* would want to make it smaller later and put it below the title */}
  font-size: 1rem;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #635B53;
  }

  &:hover {
    color: #9D9085;
    transition: 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display:none
  }
`;

export const NavResumeBtnLink = styled(LinkRouter) `
  border-radius: 10px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #458E87;
  font-size: 16px;
  outline: none;
  border: 1px solid #458E87;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #F4F4F4;
    color: #010606;
  }
`;