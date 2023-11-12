// Components
import { Circle } from '@atom';

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
      <section className={'main__content'}>
        <Circle label={'PORTFOLIO'} size={'large'} />
        <Circle label={'EXPERIENCE'} size={'medium'} />
        <Circle label={'EXPERTISE'} size={'small'} />
        <Circle label={'CONTACT'} size={'xSmall'} />
      </section>
    </MainPageWrapper>
  );
}
