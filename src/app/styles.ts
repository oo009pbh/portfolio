'use client';
import styled from 'styled-components';
import { flexCssGenerator } from '@styles';

export const MainPageWrapper = styled.main`
  ${flexCssGenerator('flex', 'center', 'column', 'flex-start')};

  width: 100%;
  height: 100%;
  padding: 9.7rem 14rem 19.8rem 14rem;
  gap: 8.9rem;

  & > section.main__title {
    width: 60.6rem;
    height: 14.5rem;

    & span {
      color: var(--black-02);
      font-size: 5.4rem;
      font-weight: 500;
      line-height: 8.2rem;
    }

    & strong {
      color: var(--black-02);
      font-size: 6.4rem;
      font-weight: 700;
      line-height: 8.2rem;
      letter-spacing: 0.0896rem;
    }
  }

  & > section.main__content {
    ${flexCssGenerator('flex')};

    width: 100%;

    & > div {
      text-indent: 5.5rem;
      margin-left: -5.5rem;
    }
  }
`;
