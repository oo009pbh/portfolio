import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

export const Container = styled.nav`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 50px;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-around;
  opacity: 0;
  & > ul {
    flex-basis: 50%;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    padding: 0;
    & > li {
      position: relative;
      list-style: none;
      cursor: pointer;
    }
  }
`;

export const HomeButton = styled.button`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  all: unset;
  flex-basis: 25%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const DownloadButton = styled.button`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  all: unset;
  flex-basis: 25%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`