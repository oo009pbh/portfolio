import { FSModule } from 'browserfs/dist/node/core/FS';
import MountableFileSystem from 'browserfs/dist/node/backend/MountableFileSystem';

export interface FileDataFunction {
  (filePath: string, data: Buffer | undefined): void;
}
export interface FileData {
  filePath: string;
  data: Buffer | undefined;
}

export type FileSystemState = {
  fs: FSModule | undefined;
  defaultFs: RootFileSystem | undefined;
  // readFile: (path: string) => Promise<string | undefined>;
  // 여기에 필요한 다른 메소드들을 추가하세요.
};

export type BFSFS = { [key: string]: BFSFS | null };
export type FS9PV4 = [string, number, number, FS9PV4[] | string | undefined];

export type RootFileSystem = Omit<MountableFileSystem, 'mntMap' | 'mountList'> & {
  mntMap: Record<
    string,
    {
      _data: Buffer;
      getName: () => string;
    }
  >;
  mountList: string[];
};

export type AsyncFS = {
  mkdir: (path: string, overwrite?: boolean) => Promise<boolean>;
  readFile: (path: string) => Promise<Buffer>;
  readdir: (path: string) => Promise<string[]>;
  writeFile: (path: string, data: Buffer | string, overwrite?: boolean) => Promise<boolean>;
};
