import { MainPageWrapper } from './styles';
import Image from 'next/image';

// Components
import BottomTaskBar from '@template/BottomTaskBar';
import DeskTop from '@template/DeskTop';

// Context
import { FileSystemProvider } from '@context/fileSystem';

export default function Home() {
  return (
    <FileSystemProvider>
      <MainPageWrapper>
        <Image
          alt="배경화면"
          className={'background-window'}
          src="/wallPaper/wp-default.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <DeskTop />
        <BottomTaskBar />
      </MainPageWrapper>
    </FileSystemProvider>
  );
}
