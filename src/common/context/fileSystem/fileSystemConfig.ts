import type { FileSystemConfiguration } from 'browserfs';
import { fs9pToBfs } from '@context/fileSystem/fileFunctions';

const index = fs9pToBfs();

export const FileSystemConfig = (writeToMemory = false): FileSystemConfiguration => ({
  fs: 'MountableFileSystem',
  options: {
    '/': {
      fs: 'OverlayFS',
      options: {
        readable: {
          fs: 'HTTPRequest',
          options: { index },
        },
        writable: {
          fs: writeToMemory ? 'InMemory' : 'IndexedDB',
          options: {},
        },
      },
    },
  },
});

export const DbConfig = {
  name: 'pbh-file-system',
  version: 1,
  objectStoresMeta: [
    {
      store: 'files',
      storeConfig: { keyPath: 'path', autoIncrement: false },
      storeSchema: [
        { name: 'path', keypath: 'path', options: { unique: true } },
        { name: 'data', keypath: 'data', options: { unique: false } },
      ],
    },
  ],
};
