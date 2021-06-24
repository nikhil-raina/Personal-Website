import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";


export const SideBarContainer = styled.aside`
  position: fixed;
  z_index : 999;
  width: 100%;
  height: 100%;
  background: #1A1B1A;
  display: grid;
  align-items: center;
  top: 0;
  ${'' /* left: 0; */}
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen? '100%' : '0')};
  top: ${({isOpen}) => (isOpen? '0' : '-100%')};
`;


export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;


export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;


export const SideBarWrapper = styled.div`
  color: ##FFFFFF;
`;


export const SideBarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #9D9085;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480) {
    grid-template-rows: repeat(6, 60px);
  }
`


export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;


export const SideBarBtnResume = styled(LinkRouter)`
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