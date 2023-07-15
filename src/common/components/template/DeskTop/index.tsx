import React, { useEffect } from 'react';
import useFileSystemContextState from '@hooks/useFileSystemContextState';
import { DeskTopWrapper } from './styles';

const ExampleComponent: React.FC = () => {
  const { readFile } = useFileSystemContextState();

  useEffect(() => {
    const fetchFileData = async () => {
      const data = await readFile('/my-path/my-file.txt');
      console.log(data);
    };

    fetchFileData();
  }, [readFile]);

  return <DeskTopWrapper>My Component</DeskTopWrapper>;
};

export default ExampleComponent;
