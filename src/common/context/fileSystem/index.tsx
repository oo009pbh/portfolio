'use client';
import contextFactory from '@context/contextFactory';
import useFileSystemContextState from '@context/fileSystem/useFileSystemContextState';

const { Provider, useContext } = contextFactory(useFileSystemContextState);

export { Provider as FileSystemProvider, useContext as useFileSystem };
