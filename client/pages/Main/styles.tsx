import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

export const Container = styled.main`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #E4F2F2;
  & > article {
    height: 90%;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #F8F9FD;
    border-radius: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    display: flex;
    justify-content: center;
    & > aside {
      width: 20%;
    }
    & > section {
      width: 80%;
    }
  }
`;

export const initial = keyframes`
  from {
    width: 0;
    height: 0;
    top: 10%;
    left: 10%;
    transform: translate(-10%, -10%);
  }
  to {
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const chat = keyframes`
  from {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  to {
    width: 90%;
    height: 90%;
    border-radius: 30px;
  }
`

export const general = keyframes`
  from {
    width: 90%;
    height: 90%;
    border-radius: 30px;
  }
  to {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`