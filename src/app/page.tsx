'use client';

// Components
import { Circle } from '@atom';

// Context
import { MainPageWrapper } from './styles';
import { css } from 'styled-components';

export default function Home() {
  const circles = [
    { name: 'PORTFOLIO', size: 'large' },
    { name: 'EXPERIENCE', size: 'medium' },
    {
      name: 'EXPERTISE',
      size: 'small',
    },
    { name: 'CONTACT', size: 'xSmall' },
  ];

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
        {circles.map((circle, index) => {
          return (
            <Circle
              key={circle.name}
              label={circle.name}
              size={circle.size}
              customStyle={css`
                z-index: ${circles.length - index};
              `}
            />
          );
        })}
      </section>
    </MainPageWrapper>
  );
}
