import styled from '@emotion/styled';
export const Container = styled.main`
  position: relative;
  max-width: 2560px;
  margin: 0 auto;

  & > section {
    height: 30px;
    margin: 30px auto;
    line-height: 1.5;

    font-size: 80px;
    font-weight: bold;
    white-space: pre-line;

    &.title {
      font-size: 80px;
    }

    &.content {
      font-size: 32px;
    }
  }
`;
