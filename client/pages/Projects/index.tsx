import React from 'react';
import loadable from "@loadable/component";

// Styles
import {Container} from '@pages/Main/styles';
import {css} from "@emotion/css";
import {fadein} from "@components/Header/styles";

// Components
const Header = loadable(() => import('@components/Header'));

const Main = () => {
    return(
        <Container>
            <Header/>
            프로젝트들
        </Container>
    );
};

export default Main;
