import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

export const ChatRoomContainer = styled.section`
  height: 100%;
  opacity: 0;
  padding: 0 60px;
  overflow: hidden;
`;

export const MessageListContainer = styled.div`
  text-align: left;
  height: 85%;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & > .ant-divider-horizontal.ant-divider-with-text::before,
  & > .ant-divider-horizontal.ant-divider-with-text::after{
    transform: none;
  }
`;

export const Balloon = styled.div<{ position: string }>`
  position: relative;
  margin-bottom: 20px;
  width: max-content;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  font-family: 'Helvetica Neue', sans-serif;
  
  & > div > time{
    margin-left: 10px;
    font-size: 8px;
  }
`;

export const Text = styled.span`
  display: inline-block;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.04);
  margin-top: 10px;
  background-color: #f7f6f9;
`;

export const MessageInputContainer = styled.div`
  width: 100%;
  height: 12%;
  padding: 5px 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    -webkit-transform:rotateX(180deg);
    transform:rotateX(180deg);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 1px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 1px;
    box-shadow: inset 0 0 5px white;
  }
`;

export const InputButton = styled.button`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  height: 25px;
  background-color: #f7f6f9;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const chatRoomWiden = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const chatRoomShrink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`