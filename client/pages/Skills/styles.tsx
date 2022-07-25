import styled from '@emotion/styled';
import {css} from "@emotion/css";
import {keyframes} from "@emotion/react";
import { CIrcle } from "@typings/main";

export const SkillsContainer = styled.div`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
`;

export const SkillsBox = styled.div`
  padding-top: 100px;
`;

export const CircleContainer = styled.svg<CIrcle>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  position: relative;
  margin: 1em;
  & > image {
    position: absolute;
    width: 80%;
    height: 80%;
    transform: translate(10%, 10%);
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
    stroke-dasharray: ${(props) => (props.width / 2 - 5) * 2 * Math.PI};
    stroke-dashoffset: ${(props) => (props.width / 2 - 5) * 2 * Math.PI - props.percent * (props.width / 2 - 5) * 2 * Math.PI / 100};
    stroke: aqua;
    animation: progress-1 1s ease-out;
  }

  @keyframes progress-1 {
    from {
      stroke-dashoffset: ${(props) => (props.width / 2 - 5) * 2 * Math.PI};
    }
    to {
      stroke-dashoffset: ${(props) => (props.width / 2 - 5) * 2 * Math.PI - props.percent * (props.width / 2 - 5) * 2 * Math.PI / 100};
    }
  }
`;