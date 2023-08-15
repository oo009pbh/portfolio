'use client';
import { useEffect, useState } from 'react';

// browserfs
import { FSModule } from 'browserfs/dist/node/core/FS';
import { BFSRequire, configure } from 'browserfs';

// Hooks
import { getDirRecursive, saveDirRecursive, checkDatabaseExist, initializeDB } from '@context/fileSystem/fileFunctions';

// Typings
import { FileSystemState, RootFileSystem } from '@typings/file';
import { FileSystemConfig } from '@context/fileSystem/fileSystemConfig';

const useFileSystemContextState = (): FileSystemState => {
  const [fs, setFs] = useState<FSModule>();
  const [defaultFs, setDefaultFs] = useState<RootFileSystem>();

  useEffect(() => {
    const setupFs = (writeToIndexedDB: boolean): void =>
      configure(FileSystemConfig(!writeToIndexedDB), () => {
        const loadedFs = BFSRequire('fs');

        setFs(loadedFs);
        setDefaultFs(loadedFs.getRootFS() as RootFileSystem);
      });
    initializeDB().then((writeToIndexedDB: boolean): void => setupFs(writeToIndexedDB));
  }, []);

  return { fs, defaultFs };
};

export default useFileSystemContextState;
