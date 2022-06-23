import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

export const Container = styled.div`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
  position: relative;
  & > section {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & span {
      display: flex;
      align-items: center;
    }
    & > span:last-child {
      justify-content: end;
    }
    & span > p {
      white-space: nowrap;
      overflow: hidden;
      border-right: 3px solid;
      font-family: seoul-hangang-jung-m,serif;
      font-size: 2em;
    }
    & > ul {
      font-weight: 700;
      font-size: 1.5em;
      padding: 0;
      display: flex;
      justify-content: space-between;
      & > li {
        position: relative;
        list-style: none;
        cursor: pointer;
      }
      & > li > a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;

export const typing = keyframes`
  0% {
    width: 0;
  }
  95% {
    width: content-box;
  }
`
export const blink = keyframes`
  50% {
    border-color: transparent
  }
`