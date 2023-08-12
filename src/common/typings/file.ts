export interface FileDataFunction {
  (filePath: string, data: Buffer | undefined): void;
}
export interface FileData {
  filePath: string;
  data: Buffer | undefined;
}
