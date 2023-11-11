import styled, { css } from 'styled-components';

// typings
import { ICssArchive } from '@typings';
import { ICircle } from '@typings/components/atom/Circle';

export const CircleStyles: ICssArchive = {
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
  `,
};

export const CircleSizes: ICssArchive = {
  large: css`
    height: 32px;
    line-height: 32px;
    padding: 0 36px;
  `,
  medium: css`
    height: 32px;
    line-height: 32px;
    padding: 0 24px;
  `,
  small: css`
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
  `,
};

export const CircleWrapper = styled.div<ICircle>`
  ${props => props.customStyle}
`;
