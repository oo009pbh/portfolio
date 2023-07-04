import React, { FC, PropsWithChildren } from 'react';

// Styles
import { BottomTaskBar } from './styles';

/**
 * @description 작업표시줄
 * @param props
 * @return {JSX.Element}
 */
const index: FC<PropsWithChildren> = ({ children }) => {
	return <BottomTaskBar>{children}</BottomTaskBar>;
};

export default index;
