'use client';
import styled from 'styled-components';
import { flexCssGenerator } from '@styles';

export const MainPageWrapper = styled.main`
  ${flexCssGenerator('flex', 'center', 'column', 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 3rem 5rem;

  & > section.main__left {
    & > div.main__title {
      width: 45rem;
      height: 9rem;

      & span {
        color: var(--black-02);
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 4.5rem;
      }

      & strong {
        color: var(--black-02);
        font-size: 2.8rem;
        font-weight: 700;
        line-height: 4.5rem;
      }
    }
  }

  & > section.main__right {
  }
`;
