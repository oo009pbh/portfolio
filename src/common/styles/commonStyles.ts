import { css } from 'styled-components';

export const flexCssGenerator = (justifyContent = 'center', flexDirection = 'row', alignItems = 'center') => css`
  display: flex;
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
`;

export const textEllipsisGenerator = (line = 1) =>
  line === 1
    ? css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `
    : css`
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;

        display: -webkit-box;
        -webkit-line-clamp: ${line};
        -webkit-box-orient: vertical;
      `;
