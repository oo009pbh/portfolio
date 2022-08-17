import styled from '@emotion/styled';
import {css} from "@emotion/css";
import {keyframes} from "@emotion/react";

const fillLeft = keyframes `
    100% {
        right: 100%;
    }
`

const fillTop = keyframes `
    100% {
        top: 100%;
    }
`

const fillLeftOdd = keyframes `
    100% {
        left: 100%;
    }
`

export const TimeLineContainer = styled.div`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: max-content;
  min-height: 100vh;
  width: 100vw;
`;

export const TimeLineContent = styled.div`
  background-color: #F8F9FD;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  min-height: 100vh;
`;

export const TimeLineBoxContainer = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0;
  border-radius: 6px;
  align-self: center;
  width: 50vw;
  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
    & div.date {
      border-radius: 0 6px 6px 0;
    }
    & div.content {
      border-radius: 6px 0 0 6px;
    }

    & div.icon {
      &:before {
        content: "";
        width: 2px;
        height: 100%;
        background: #f6a4ec;
        position: absolute;
        top: 0;
        left: 50%;
        right: auto;
        z-index: 0;
        transform: translateX(-50%);
        animation: ${fillTop} 2s forwards 4s ease-in-out;
      }
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        background: #f6a4ec;
        position: absolute;
        right: 0;
        z-index: 0;
        top: 50%;
        left: auto;
        transform: translateY(-50%);
        animation: ${fillLeft} 2s forwards 4s ease-in-out;
      }
    }
  }

  & div.title {
    font-size: 1.2rem;
    line-height: 1.4;
    text-transform: uppercase;
    font-weight: 600;
    color: #9251ac;
    letter-spacing: 1.5px;
  }
  & div.content {
    padding: 20px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    background: #fff;
    width: calc(40vw - 84px);
    border-radius: 0 6px 6px 0;
  }
  & div.date {
    color: #f6a4ec;
    font-size: 1.5rem;
    font-weight: 600;
    background: #9251ac;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: pre;
    padding: 0 20px;
    border-radius: 6px 0 0 6px;
    z-index: 1;
  }
  & div.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9251ac;
    align-self: center;
    margin: 0 20px;
    background: #f6a4ec;
    border-radius: 100%;
    width: 40px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    padding: 40px;
    height: 40px;
    position: relative;

    & > svg {
      font-size: 32px;
      z-index: 1;
    }

    &:before {
      content: "";
      width: 2px;
      height: 100%;
      background: #f6a4ec;
      position: absolute;
      top: 0;
      z-index: 0;
      left: 50%;
      transform: translateX(-50%);
      animation: ${fillTop} 2s both 4s ease-in-out;
    }
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background: #f6a4ec;
      position: absolute;
      left: 0;
      z-index: 0;
      top: 50%;
      transform: translateY(-50%);
      animation: ${fillLeftOdd} 2s forwards 4s ease-in-out;
    }
  }
  
  & div.description {
    flex-basis: 60%;
  }

  &.type2 {
    &:after {
      background: #555ac0;
    }
    & div.date {
      color: #87bbfe;
      background: #555ac0;
    }

    &:nth-child(2n + 1) {
      &  div.icon {
        &:before,
        &:after {
          background: #87bbfe;
        }
      }
    }

    &  div.icon {
      background: #87bbfe;
      color: #555ac0;
      &:before,
      &:after {
        background: #87bbfe;
      }
    }
    &  div.title {
      color: #555ac0;
    }
    &  div.title {
    }
  }

  &.type3 {
    &:after {
      background: #24b47e;
    }
    &  div.date {
      color: #aff1b6;
      background-color: #24b47e;
    }

    &:nth-child(2n + 1) {
      &  div.icon {
        &:before,
        &:after {
          background: #aff1b6;
        }
      }
    }

    & div.icon {
      background: #aff1b6;
      color: #24b47e;
      &:before,
      &:after {
        background: #aff1b6;
      }
    }
    &  div.title {
      color: #24b47e;
    }
    &  div.title {
    }
  }
  
  &:last-child {
    & div.icon {
      &:before {
        content: none;
      }
    }
  }
`;