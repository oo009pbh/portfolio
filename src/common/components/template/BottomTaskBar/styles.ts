'use client';
import styled from '@emotion/styled';

export const BottomTaskBarWrapper = styled.footer`
  position: fixed;
  bottom: 0;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 0 15px;

  width: 100%;
  height: 48px;
  background: linear-gradient(90deg, #e4eefa 0%, #d5dcf6 52.4%, #e3edf6 100%);

  & > div.bottom-taskbar-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    &:hover {
      border-radius: 3px;
      background: #fff;
    }
  }
`;
