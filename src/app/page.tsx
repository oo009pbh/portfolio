// Components
import Image from 'next/image';

// Context
import { MainPageWrapper } from './styles';

export default function Home() {
  return (
    <MainPageWrapper>
      <section className="main__profile">
        <article className="main__profile--content">
          <div className={'main__profile--image'}>
            <Image
              src="/bg/bg-profile.jpg"
              objectFit={'contain'}
              width={300}
              height={300}
              alt="Picture of the Park Byeong Hoon"
            />
          </div>
          <div className="main__profile--title">
            <span>안녕하세요,</span>
            <br />
            <span>
              저는 개발자 <strong>박병훈</strong> 입니다.
            </span>
          </div>
        </article>
        <div className="main__link--container">
          <div className="main__link--title">CONNECT WITH ME</div>
          <div className="main__link--content">
            <Image src="/icon/ic-mail.svg" width={32} height={32} alt="mail link" />
            <Image src="/icon/ic-github.svg" width={32} height={32} alt="github link" />
            <Image src="/icon/ic-linkedin.svg" width={32} height={32} alt="linkedin link" />
            <Image src="/icon/ic-velog.svg" width={32} height={32} alt="velog link" />
          </div>
        </div>
      </section>
      <section className="main__summary">
        <div className="about__tag">ABOUT ME</div>
        <article className="about__title">
          사용하기 편한 컴포넌트
          <br />
          개발을 지향합니다.
        </article>
        <article className="about__description">
          Si 스타트업에서 2년 6개월째 프론트엔드 개발을 맡고 있으며, <br />
          읽기 쉬운 코드로 금방 사용법을 알 수 있는 컴포넌트를 개발 하는 것을 좋아합니다. 기획자, 디자이너, 타 개발자
          분들과 소통하며 전체 개발 일정을 조율하고 프로젝트를 출시하는 것에 큰 보람을 느낍니다.
        </article>
        <article className="about__info">
          <div className="about__info--category">Education</div>
          <div className="about__info--container">
            <div className="about__info--title">세종대학교</div>
            <div className="about__info--content">2016.02 ~ 2022.03</div>
          </div>
          <div className="about__info--container">
            <div className="about__info--title">전공</div>
            <div className="about__info--content">소프트웨어 심화</div>
          </div>
          <div className="about__info--container">
            <div className="about__info--title">전공학점</div>
            <div className="about__info--content">3.7 / 4.5</div>
          </div>
        </article>
        <article className="about__info">
          <div className="about__info--category">Etc</div>
          <div className="about__info--container">
            <div className="about__info--title">SQLD</div>
            <div className="about__info--content">2022.12</div>
          </div>
          <div className="about__info--container">
            <div className="about__info--title">해군전역</div>
            <div className="about__info--content">2018.02 ~ 2019.12</div>
          </div>
        </article>
      </section>
    </MainPageWrapper>
  );
}
