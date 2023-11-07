// Components

// Context

import { MainPageWrapper } from './styles';

export default function Home() {
  return (
    <MainPageWrapper>
      <section className={'main__title'}>
        <span>안녕하세요,</span>
        <br />
        <span>
          저는 개발자 <strong>박병훈</strong> 입니다.
        </span>
      </section>
    </MainPageWrapper>
  );
}
