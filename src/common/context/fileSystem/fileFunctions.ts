import { BFSFS, FileData, FS9PV4 } from '@typings/file';
import { BFSRequire } from 'browserfs';
const fs = BFSRequire('fs');
import { openDB, IDBPDatabase } from 'idb';
import index from 'public/.index/publicFileInfo.json';
import { FILE_ENTRY, ONE_TIME_PASSIVE_EVENT } from '@utils/const';
const fsroot = index.fsroot as FS9PV4[];

export const getDirRecursive = (dirPath: string): Promise<FileData[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        return reject(err);
      }

      const promises: Array<Promise<FileData[]>> = [];

      (files || []).forEach(file => {
        const filePath = `${dirPath}/${file}`;

        promises.push(
          new Promise((res, rej) => {
            fs.stat(filePath, (err, stats) => {
              if (err) {
                return rej(err);
              }

              if (stats && stats.isDirectory()) {
                getDirRecursive(filePath).then(res).catch(rej);
              } else if (stats && stats.isFile()) {
                fs.readFile(filePath, (err, data) => {
                  if (err) {
                    return rej(err);
                  }
                  res([{ filePath, data }]);
                });
              }
            });
          })
        );
      });

      Promise.all(promises)
        .then(results => {
          resolve(results.flat());
        })
        .catch(reject);
    });
  });
};

export const saveDirRecursive = (db: IDBPDatabase) => {
  const saveRecursive = (path: string) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        throw err;
      }
      (files || []).forEach(file => {
        const fullPath = `${path}/${file}`;
        fs.stat(fullPath, (err, stats) => {
          if (err) {
            throw err;
          }
          if (stats && stats.isDirectory()) {
            saveRecursive(fullPath);
          } else if (stats && stats.isFile()) {
            fs.readFile(fullPath, async (err, data) => {
              if (err) {
                throw err;
              }
              await db.put('files', { path: fullPath, data });
            });
          }
        });
      });
    });
  };

  saveRecursive('/public');
};

export const checkDatabaseExist = (): Promise<boolean> => {
  return new Promise(resolve => {
    if (typeof window !== 'undefined') {
      const request = window.indexedDB.open('pbh-file-system');

      request.onupgradeneeded = () => {
        // 데이터베이스 생성 중단
        request.transaction?.abort();

        resolve(false);
      };

      request.onsuccess = () => {
        resolve(true);
      };
    } else {
      resolve(false);
    }
  });
};

export const initializeDB = (): Promise<boolean> =>
  new Promise(resolve => {
    const db = window.indexedDB.open('browserfs');

    db.addEventListener('error', () => resolve(false), ONE_TIME_PASSIVE_EVENT);
    db.addEventListener(
      'success',
      ({ target }) => {
        resolve(true);

        try {
          db.result.close();
        } catch {
          // Ignore errors to close database
        }

        const { objectStoreNames } = (target as IDBOpenDBRequest)?.result || {};

        if (objectStoreNames?.length === 0) {
          try {
            window.indexedDB.deleteDatabase('browserfs');
          } catch {
            // Ignore errors to delete database
          }
        }
      },
      ONE_TIME_PASSIVE_EVENT
    );
  });

const mapReduce9pArray = (array: FS9PV4[], mapper: (entry: FS9PV4) => BFSFS): BFSFS =>
  array.map(mapper).reduce((a, b) => Object.assign(a, b), {});

const parse9pEntry = ([name, , , pathOrArray]: FS9PV4): BFSFS => ({
  [name]: Array.isArray(pathOrArray) ? mapReduce9pArray(pathOrArray, parse9pEntry) : FILE_ENTRY,
});

export const fs9pToBfs = (): BFSFS => mapReduce9pArray(fsroot, parse9pEntry);
