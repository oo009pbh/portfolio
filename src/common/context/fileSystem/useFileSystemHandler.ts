'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { join } from 'path';

// browserfs
import { FSModule } from 'browserfs/dist/node/core/FS';
import { BFSRequire, configure } from 'browserfs';

// Hooks
import { getDirRecursive, saveDirRecursive, checkDatabaseExist, initializeDB } from '@context/fileSystem/fileFunctions';

// Typings
import { AsyncFS, FileSystemState, RootFileSystem } from '@typings/file';
import { FileSystemConfig } from '@context/fileSystem/fileSystemConfig';

const useFileSystemHandler = (): FileSystemState => {
  const fsRef = useRef<FSModule>();
  const [fs, setFs] = useState<FSModule>();
  const [defaultFs, setDefaultFs] = useState<RootFileSystem>();

  const asyncFs: AsyncFS = useMemo(
    () => ({
      mkdir: (path, overwrite = false) =>
        new Promise((resolve, reject) => {
          fs?.mkdir(path, { flag: overwrite ? 'w' : 'wx' }, error => (error ? reject(error) : resolve(true)));
        }),
      readFile: path =>
        new Promise((resolve, reject) => {
          fs?.readFile(path, (error, data = Buffer.from('')) => {
            if (!error) {
              return resolve(data);
            }

            if (error.code === 'EISDIR' && defaultFs?.mntMap[path]?._data) {
              return resolve(defaultFs.mntMap[path]._data);
            }

            return reject(error);
          });
        }),
      readdir: path =>
        new Promise((resolve, reject) => {
          fs?.readdir(path, (error, data = []) => (error ? reject(error) : resolve(data)));
        }),
      writeFile: (path, data, overwrite = false) =>
        new Promise((resolve, reject) => {
          fs?.writeFile(path, data, { flag: overwrite ? 'w' : 'wx' }, error => {
            if (error && (!overwrite || error.code !== 'EEXIST')) {
              reject(error);
            } else {
              resolve(!error);
            }
          });
        }),
    }),
    [fs, defaultFs]
  );

  useEffect(() => {
    const setupFs = (writeToIndexedDB: boolean): void =>
      configure(FileSystemConfig(!writeToIndexedDB), () => {
        const loadedFs = BFSRequire('fs');
        fsRef.current = loadedFs;

        setFs(loadedFs);
        setDefaultFs(loadedFs.getRootFS() as RootFileSystem);
      });
    initializeDB().then((writeToIndexedDB: boolean): void => setupFs(writeToIndexedDB));
  }, []);

  return useMemo(
    () => ({
      ...asyncFs,
      fs,
      defaultFs,
    }),
    [asyncFs, fs, defaultFs]
  );
};

export default useFileSystemHandler;
