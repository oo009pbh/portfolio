import { FlattenSimpleInterpolation } from 'styled-components';

export interface ICssArchive extends Record<string, string | FlattenSimpleInterpolation> {}

export interface IParams extends Record<string | number, any> {}

export type ICustomStyle = {
  customStyle?: FlattenSimpleInterpolation;
  variant?: string;
  size?: string;
};

export type YnType = 'Y' | 'N';
