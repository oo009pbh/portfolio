'use client';
import React from 'react';
import { DeskTopWrapper } from './styles';
import { FileSystemProvider } from '@context/fileSystem';

const Main = () => {
  return (
    <FileSystemProvider>
      <DeskTopWrapper>My Component</DeskTopWrapper>
    </FileSystemProvider>
  );
};

export default Main;
