'use client';
import React from 'react';
import { DeskTopWrapper } from './styles';
import { FileSystemProvider } from '@context/fileSystem';

// Component
import FileManager from '@template/FileManager';

const Main = () => {
  return (
    <FileSystemProvider>
      <DeskTopWrapper>
        <FileManager />
      </DeskTopWrapper>
    </FileSystemProvider>
  );
};

export default Main;
