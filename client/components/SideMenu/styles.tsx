import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';

export const SideMenuContainer = styled.div`
  width: 30%;
  height: 100%;
`;

export const SideMenuContent = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  transform: skewY(-15deg);
  & > li::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
  }
  & > li::after {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #3e3f46;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }
  & > li {
    position: relative;
    margin: 0 auto;
    width: 200px;
    list-style: none;
    background: #3e3f46;
    padding: 15px;
    transition: 0.5s;
  }
  & > li:hover{
    background: steelblue;
    transform: translate(-50px);
  }
  & > li:hover > a{
    color: #fff
  }
  & > li > a {
    font-family: Bahnschrift, sans-serif;
    text-decoration: none;
    color: #999;
    letter-spacing: 0.05em;
    transition: 0.5s;
  }
`;

export const example = keyframes`
  0%   {left: 0}
  100% {left: 400px}
`

//
// export const Form = styled.form`
//   margin: 0 auto;
//   width: 400px;
//   max-width: 400px;
// `;
//
// export const Label = styled.label`
//   margin-bottom: 16px;
//   & > span {
//     display: block;
//     text-align: left;
//     padding-bottom: 8px;
//     font-size: 15px;
//     cursor: pointer;
//     line-height: 1.46666667;
//     font-weight: 700;
//   }
// `;
//
// export const Input = styled.input`
//   border-radius: 4px;
//   --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
//   border: 1px solid var(--saf-0);
//   transition: border 80ms ease-out, box-shadow 80ms ease-out;
//   box-sizing: border-box;
//   margin: 0 0 20px;
//   width: 100%;
//   color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
//   background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
//   padding: 12px;
//   height: 44px;
//   padding-top: 11px;
//   padding-bottom: 13px;
//   font-size: 18px;
//   line-height: 1.33333333;
//   &:focus {
//     --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
//     box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
//   }
// `;
//
// export const Button = styled.button`
//   margin-bottom: 12px;
//   width: 100%;
//   max-width: 100%;
//   color: #fff;
//   background-color: #4a154b;
//   border: none;
//   font-size: 18px;
//   font-weight: 900;
//   height: 44px;
//   min-width: 96px;
//   padding: 0 16px 3px;
//   transition: all 80ms linear;
//   user-select: none;
//   outline: none;
//   cursor: pointer;
//   border-radius: 4px;
//   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
//   &:hover {
//     background-color: rgba(74, 21, 75, 0.9);
//     border: none;
//   }
//   &:focus {
//     --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
//     box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
//   }
// `;
//
// export const Error = styled.div`
//   color: #e01e5a;
//   margin: 8px 0 16px;
//   font-weight: bold;
// `;
//
// export const Success = styled.div`
//   color: #2eb67d;
//   font-weight: bold;
// `;
//
// export const LinkContainer = styled.p`
//   font-size: 13px;
//   color: #616061;
//   margin: 0 auto 8px;
//   width: 400px;
//   max-width: 400px;
//   & a {
//     color: #1264a3;
//     text-decoration: none;
//     font-weight: 700;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;
