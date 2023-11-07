import { css } from 'styled-components';

export const flexCssGenerator = (justifyContent = 'center', flexDirection = 'row', alignItems = 'center') => css`
  display: flex;
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
`;
