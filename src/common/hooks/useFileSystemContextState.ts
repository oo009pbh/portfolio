// import { useEffect, useState, useCallback } from 'react';
// import * as BrowserFS from 'browserfs';
// import { FSModule } from 'browserfs/dist/node/core/FS';
//
// type FileSystemState = {
//   fs: FSModule | undefined;
//   readFile: (path: string) => Promise<string | undefined>;
//   // 여기에 필요한 다른 메소드들을 추가하세요.
// };
//
// const useFileSystemContextState = (): FileSystemState => {
//   const [fs, setFs] = useState<FSModule>();
//
//   useEffect(() => {
//     BrowserFS.configure({ fs: 'IndexedDB' }, function (err) {
//       if (err) {
//         throw err;
//       }
//       setFs(BrowserFS.BFSRequire('fs'));
//     });
//   }, []);
//
//   // Example function for reading a file
//   const readFile = useCallback(
//     (path: string): Promise<string | undefined> => {
//       return new Promise<string | undefined>((resolve, reject) => {
//         fs?.readFile(path, 'utf-8', (err: any, data: string) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(data);
//           }
//         });
//       });
//     },
//     [fs]
//   );
//
//   // Add additional file system methods as needed here.
//
//   return { fs, readFile };
// };
//
// export default useFileSystemContextState;
