import styled from '@emotion/styled';
import {css} from "@emotion/css";
import {keyframes} from "@emotion/react";
import { CIrcle } from "@typings/main";

export const SkillsContainer = styled.section`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
`;

export const SkillContent = styled.article`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight: bold;
    text-transform: Uppercase;
    font-size: 30px;
  }
`;

export const SkillsBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    flex-basis: 45%;
  }
  & > div > h1 {
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight: bold;
    text-transform: Uppercase;
    font-size: 20px;
  }
  & > div .skills {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CircleContainer = styled.div`
  display: inline-block;
  
  & p {
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight: bold;
    text-transform: Uppercase;
    font-size: 20px;
  }
`;

const progress = (from:number, to:number) => keyframes`
  0% {
    stroke-dashoffset: ${from}
  }
  100% {
    stroke-dashoffset: ${to}
  }
`;

export const Circle = styled.svg<CIrcle>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  position: relative;
  margin: 1em;
  & > image {
    position: absolute;
    width: 60%;
    height: 60%;
    transform: translate(20%, 20%);
  }

  .bg {
    fill: none;
    stroke-width: 5px;
    stroke: #1A2C34;
  }

  @keyframes progress-1 {
    0% {
      stroke-dashoffset: ${(props) => (props.width / 2 - 5) * 2 * Math.PI};
    }
    100% {
      stroke-dashoffset: ${(props) => (props.width / 2 - 5) * 2 * Math.PI - props.percent * (props.width / 2 - 5) * 2 * Math.PI / 100};
    }
  }

  .meter {
    fill: none;
    stroke-width: 5px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: ${(props) => (props.width / 2 - 5) * 2 * Math.PI};
    stroke-dashoffset: ${(props) => (props.width / 2 - 5) * 2 * Math.PI - props.percent * (props.width / 2 - 5) * 2 * Math.PI / 100};
    stroke: ${(props) => props.color};
    animation: ${props => progress((props.width / 2 - 5) * 2 * Math.PI, (props.width / 2 - 5) * 2 * Math.PI - props.percent * (props.width / 2 - 5) * 2 * Math.PI / 100)} 1s ease-out;
  }
`;