'use client';
import { useEffect, useState } from 'react';

import { FSModule } from 'browserfs/dist/node/core/FS';
import { getDirRecursive, saveDirRecursive, checkDatabaseExist, initializeDB } from '@context/fileSystem/fileFunctions';

type FileSystemState = {
  fs: FSModule | undefined;
  defaultFs: FSModule | undefined;
  // readFile: (path: string) => Promise<string | undefined>;
  // 여기에 필요한 다른 메소드들을 추가하세요.
};

// initDB(DbConfig);

const useFileSystemContextState = (): FileSystemState => {
  const [fs, setFs] = useState<FSModule>();
  const [defaultFs, setDefaultFs] = useState<FSModule>();

  useEffect(() => {
    checkDatabaseExist().then(isExist => {
      if (isExist) {
        console.log('Database already exists  ');
      } else {
        console.log('Database is not available');
      }
    });
  }, []);

  return { fs, defaultFs };
};

export default useFileSystemContextState;
