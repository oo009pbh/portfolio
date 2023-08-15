'use client';
import React from 'react';
import { FileManagerContainer } from './styles';

// Hooks
import useDragElement from '@hooks/useDragElement';

const FileManager = () => {
  const { ref, isDragging } = useDragElement();
  return (
    <FileManagerContainer ref={ref}>
      <div className={'file-manager__header'}></div>
      <div className={'file-manager__toolbar'}></div>
      <div className={'file-manager__filter'}></div>
      <div className={'file-manager__content'}>
        <div className={'file-manager__side-menu'}></div>
        <div className={'file-manager__main'}></div>
      </div>
    </FileManagerContainer>
  );
};

export default FileManager;
