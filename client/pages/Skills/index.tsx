import React from 'react';
import loadable from "@loadable/component";

// Styles
import {Container} from '@pages/Main/styles';
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));

const Main = () => {
    return(
        <Container>
            <Header/>
            스킬들
        </Container>
    );
};

export default Main;
