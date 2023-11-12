import styled, { css } from 'styled-components';

// typings
import { ICssArchive } from '@typings';
import { ICircle } from '@typings/components/atom/Circle';

// styles
import { flexCssGenerator } from '@styles';

export const CircleStyles: ICssArchive = {
  default: css`
    ${flexCssGenerator('inline-flex')};
    color: #d9d9d9;
    font-size: 2rem;

    border: 2px solid #bab7d2;
    border-radius: 100%;
  `,
};

export const CircleSizes: ICssArchive = {
  large: css`
    width: 30.3rem;
    height: 30.3rem;
  `,
  medium: css`
    width: 25.9rem;
    height: 25.9rem;
  `,
  small: css`
    width: 22.2rem;
    height: 22.2rem;
  `,
  xSmall: css`
    width: 17.6rem;
    height: 17.6rem;
  `,
};

export const CircleWrapper = styled.div<ICircle>`
  ${CircleStyles.default}
  ${props => props.size && CircleSizes[props.size]}
  ${props => props.variant && CircleStyles[props.variant]}
  ${props => props.customStyle}
`;
