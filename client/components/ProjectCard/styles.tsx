import styled from '@emotion/styled';

// Images
import mobilif from '@logo/mobilif.jpg';
import skillup from '@logo/skillup.jpg';
import nextzero from '@logo/nextzero.jpg';
import codeclass from '@logo/codeclass.jpg';
import opensource from '@logo/opensource.png';
import portfolio from '@logo/portfolio.svg';

// Typings
import { PRojectCard } from "@typings/main";

const selectImage = (imageName:string) => {
    switch (imageName) {
        case 'mobilif':
            return mobilif;
        case 'skillup':
            return skillup;
        case 'nextzero':
            return nextzero;
        case 'codeclass':
            return codeclass;
        case 'opensource':
            return opensource;
        case 'portfolio':
            return portfolio;
        default:
            return '';
    }
}

export const Container = styled.div<PRojectCard>`
  width: 500px;
  height: 500px;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto 100px;
  background: url(${(props) => selectImage(props.imageName)});
  background-color: black;
  background-size: cover;

  -webkit-box-shadow: 0 0 5px #000;
  box-shadow: 0 0 5px #000;

  & .overlay {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    background: rgba(77, 77, 77, .9);
    color: #FEF5DF;
    opacity: 0;
    transition: all 0.5s;
    padding: 20px;
    letter-spacing: 3px;

    & .head {
      font-size: 30px;
      line-height: 40px;
      transform: translateY(40px);
      transition: all 0.7s;
      
      & hr {
        display: block;
        width: 0;
        border: none;
        border-bottom: solid 2px #FEF5DF;
        position: absolute;
        bottom: 0; 
        left: 20px;
        transition: all .5s;
      }
    }

    & .description {
      font-size: 14px;
      line-height: 16px;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.7s;
      white-space: pre-line;
      
      & p {
        font-size: 22px;
        line-height: 22px;
      }
    }

    & .dedication {
      font-size: 14px;
      line-height: 16px;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.7s;
      white-space: pre-line;

      & p {
        font-size: 22px;
        line-height: 22px;
      }
    }

    & .skills {
      font-size: 14px;
      line-height: 16px;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.7s;
      white-space: pre-line;

      & p {
        font-size: 22px;
        line-height: 22px;
      }
    }
    
    & .link {
      font-size: 12px;
      opacity: 0;
      letter-spacing: 1px;
      transform: translateY(40px);
      transition: all 0.7s;
      & i {
        font-size: 16px;
      }
      & span {
        margin-left: 10px;
      }
    }
  }

  &:hover .overlay {
    opacity: 1;
    & .head {
      transform: translateY(0px);
      & hr {
        width: 90%;
        transition-delay: 0.2s;
      }
    }

    & .description {
      transform: translateY(0px);
      transition-delay: 0.2s;
      opacity: 1;
    }

    & .dedication {
      transform: translateY(0px);
      transition-delay: 0.4s;
      opacity: 1;
    }

    & .skills {
      transform: translateY(0px);
      transition-delay: 0.6s;
      opacity: 1;
    }

    & .link {
      transform: translateY(0px);
      transition-delay: 0.8s;
      opacity: 1;
    }
  }
`;