import styled from '@emotion/styled';
import {css} from "@emotion/css";
import {keyframes} from "@emotion/react";

export const ProjectsContainer = styled.section`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ProjectsContent = styled.article`
  padding-top: 56px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;