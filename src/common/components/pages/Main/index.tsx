import React, { FC, PropsWithChildren } from 'react';

// Styles
import { Container } from '@pages/Main/styles';

const index: FC<PropsWithChildren> = ({ children }) => {
	return <Container>{children}</Container>;
};

export default index;
