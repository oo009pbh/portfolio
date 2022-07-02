import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

export const Container = styled.nav`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid;
  position: fixed;
  display: flex;
  overflow: hidden;
  z-index: 100;
  & > span {
    background-color: #3C5654;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
    }
  }
  & > ul {
    width: 0;
    height: 56px;
    background-color: #3C5654;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    padding: 0;
    & > li {
      list-style: none;
      cursor: pointer;
      color: #f6f4e6;
      text-decoration: none;
      font-size: 1.2em;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      text-transform: capitalize;
    }
    & > li:hover {
      color: #fddb3a;
    }
  }
`;

export const headerWiden = keyframes`
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
`