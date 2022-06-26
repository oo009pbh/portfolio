import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

export const SideMenuContainer = styled.aside`
  width: 30%;
  height: 100%;
`;

export const Profile = styled.div`
  height: 0;
  background-color: #3C5654;
  border-top-left-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & > span:nth-child(2) {
    margin-top: 10px;
    font-size: 20px;
    color:white;
  }
  & > span:nth-child(3) {
    font-size: 14px;
    color:white;
  }
`;

export const Menu = styled.ul`
  margin: 0;
  height: 0;
  border-bottom-left-radius: 30px;
  background-color: #425C5A;
  overflow: hidden;
  & > li {
    list-style: none;
    padding-left: 25px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #F8F9FD;
    cursor: pointer;
  }
  & > li.active {
    background-color: #F8F9FD;
    color: black;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    position: relative;
    & > a {
      color: #3C5654;
    }
  }
  & > li > span:last-child {
    margin-left: 15px;
  }
`;


export const profileWiden = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 35%;
  }
`

export const profileShrink = keyframes`
  0% {
    height: 35%;
  }
  100% {
    height: 0;
  }
`

export const menuWiden = keyframes`
  0% {
    height: 0;
    padding-left: 15px;
  }
  100% {
    height: 65%;
    padding-left: 15px;
    padding-top: 20px;
  }
`

export const menuShrink = keyframes`
  0% {
    height: 65%;
    padding-left: 15px;
    padding-top: 20px;
  }
  100% {
    height: 0;
    padding-left: 15px;
    padding-top: 0;
  }
`