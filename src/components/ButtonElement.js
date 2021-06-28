import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 10px;
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '10px 22px')};
  color: ${({color}) => (color ? '#9D9085' : '#fff')};
  font-size: ${({font}) => (font ? '20px' : '16px')};
  outline: none;

  background: ${({background}) => (background ? '#fff' : '')};
  border: ${({border}) => (border ? '1px solid #458E87' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({background}) => (background ? '#fff' : '#F4F4F4')};
    color: ${({color}) => (color ? '#458E87' : '#fff')};
  }
`