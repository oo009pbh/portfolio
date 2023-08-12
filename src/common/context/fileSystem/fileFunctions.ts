import { FileData } from '@typings/file';
import { BFSRequire } from 'browserfs';
const fs = BFSRequire('fs');
import { openDB, IDBPDatabase } from 'idb';

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

export const initializeDB = async () => {
  return await openDB('pbh-file-system', 1, {
    upgrade(db) {
      db.createObjectStore('files', { keyPath: 'path' });
    },
  });
};
