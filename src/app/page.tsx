import { MainPageWrapper } from './styles';
import Image from 'next/image';

// Components
import BottomTaskBar from '@template/BottomTaskBar';
export default function Home() {
  return (
    <MainPageWrapper>
      <Image alt="배경화면" src="/wallPaper/wp-default.png" layout="fill" objectFit="cover" quality={100} />
      <BottomTaskBar />
    </MainPageWrapper>
  );
}
