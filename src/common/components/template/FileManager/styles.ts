'use client';
import styled from '@emotion/styled';

export const FileManagerContainer = styled.article`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

  min-width: 600px;
  min-height: 450px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid #0E2E67;
  background: #FFF;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);

  & > div.file-manager__header {
    width: 100%;
    height: 32px;

    border: 1px solid #0E2E67;
    border-radius: 10px 10px 0 0;
    background: #0E2E67;
  }

  & > div.file-manager__toolbar {
    width: 100%;
    height: 24px;

    border-bottom: 0.5px solid rgba(102, 102, 102, 0.50);
    background: #FFF;
  }

  & > div.file-manager__filter {
    width: 100%;
    height: 43px;
  }

  & > div.file-manager__content {
    display: flex;
    justify-content: space-between;

    & > div.file-manager__side-menu {
      width: 166px;
      border-right: 1px solid #666666;
    }

    & > div.file-manager__main {
      width: fit-content;
    }
  }
`;
