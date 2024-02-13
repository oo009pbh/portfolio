'use client';
import styled from 'styled-components';
import { flexCssGenerator, fontGenerator } from '@styles';

export const MainPageWrapper = styled.main`
  ${flexCssGenerator('flex', 'center', 'flex-start', 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 8rem 5rem;

  & > section.main__profile {
    width: 55rem;

    & > div.main__image {
      width: 30rem;
      height: 30rem;
      margin-bottom: 3rem;
    }

    & > article.main__title {
      width: 45rem;
      height: 8rem;

      & span {
        color: var(--black-02);
        ${fontGenerator('3.5rem', '400', '4rem')}
      }

      & strong {
        color: var(--black-02);
        ${fontGenerator('3.5rem', '500', '4rem')}
      }
    }

    & > div.main__links {
    }
  }

  & > section.main__summary {
    width: 45rem;

    & > div.about__tag {
      ${fontGenerator('1.4rem', '400', '2.2rem')}
      color: var(--blue-01);
      margin-bottom: 1rem;
    }

    & > article.about__title {
      ${fontGenerator('2.8rem', '700', '3.2rem')}
      margin-bottom: 1.4rem;
      height: 6.4rem;
    }

    & > article.about__description {
      margin-bottom: 3.5rem;
    }

    & > article.about__info {
      & > div.about__info--category {
        ${fontGenerator('1.4rem', '700', '2rem')}
        margin-bottom: 1.4rem;
      }

      & > div.about__info--container {
        ${flexCssGenerator('flex', 'space-between', 'center', 'flex-start')};
        margin-bottom: 1rem;

        & > div.about__info--title {
          color: var(--gray-80);
        }

        & > div.about__info--content {
          color: var(--gray-60);
        }

        &:nth-last-of-type(1) {
          margin-bottom: 2.4rem;
        }
      }
    }
  }
`;
