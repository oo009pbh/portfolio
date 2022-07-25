import styled from '@emotion/styled';
import {css} from "@emotion/css";
import {keyframes} from "@emotion/react";

export const SkillsContainer = styled.div`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
`;

export const CircleContainer = styled.div`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
  
  svg {
    width: 114px;
    height: 114px;
    margin: 1em;
    position: relative;
    & > image {
      position: absolute;
      width: 80%;
      height: 80%;
      transform: translate(10%, 10%);
    }
  }

  .bg {
    fill: none;
    stroke-width: 5px;
    stroke: #1A2C34;
  }

  [class^="meter-"] {
    fill: none;
    stroke-width: 5px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;

  }

  .meter-1 {
    stroke-dasharray: 360;
    stroke-dashoffset: 200;
    stroke: aqua;
    animation: progress-1 1s ease-out;
  }

  @keyframes progress-1 {
    from {
      stroke-dashoffset: 360;
    }
    to {
      stroke-dashoffset: 200;
    }
  }
`;