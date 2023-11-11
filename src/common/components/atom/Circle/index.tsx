import React from 'react';
import { css } from 'styled-components';

import { CircleWrapper } from '@atom/Circle/style';
import { ICircle } from '@typings/components/atom/Circle';

function Circle({
  customStyle = css``,
  label = '버튼',
  variant = 'primary',
  size = 'medium',
  onClick = () => {},
}: React.PropsWithChildren<ICircle>) {
  return (
    <CircleWrapper customStyle={customStyle} variant={variant} size={size} onClick={onClick}>
      {label}
    </CircleWrapper>
  );
}

export default Circle;
