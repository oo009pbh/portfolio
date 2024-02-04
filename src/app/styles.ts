'use client';
import styled from 'styled-components';
import { flexCssGenerator, fontGenerator } from '@styles';

export const MainPageWrapper = styled.main`
  ${flexCssGenerator('flex', 'center', 'flex-start', 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 14rem 5rem;

  & > section.main__profile {
    width: 60rem;

    & > div.main__image {
      width: 32rem;
      height: 32rem;
      margin-bottom: 3rem;
    }

    & > article.main__title {
      width: 45rem;
      height: 9rem;

      & span {
        color: var(--black-02);
        ${fontGenerator('2.8rem', '500', '4.5rem')}
      }

      & strong {
        color: var(--black-02);
        ${fontGenerator('2.8rem', '700', '4.5rem')}
      }
    }

    & > div.main__links {
    }
  }

  & > section.main__summary {
    width: 60rem;

    & > div.about__tag {
      ${fontGenerator('1.4rem', '400', '2.2rem')}
      color: var(--blue-01);
      margin-bottom: 1.8rem;
    }

    & > article.about__title {
      ${fontGenerator('2.8rem', '700', '4.4rem')}
      margin-bottom: 1.4rem;
    }

    & > article.about__description {
    }

    & > article.about__info {
      & > div.about__info--category {
      }

      & > div.about__info--container {
        ${flexCssGenerator('flex', 'space-between', 'center', 'flex-start')};

        & > div.about__info--title {
        }

        & > div.about__info--content {
        }
      }
    }
  }
`;
