import { ICustomStyle } from '@typings';
import { MouseEvent } from 'react';

export interface ICircle extends ICustomStyle {
  label?: string;
  variant?: string;
  size?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
