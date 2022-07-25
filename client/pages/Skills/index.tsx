import React, {useState} from 'react';
import loadable from "@loadable/component";

// Styles
import {SkillsContainer} from './styles';
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));
const CircleProgressBar = loadable(() => import('./CircleProgressBar'));

const Skills = () => {
    return(
        <SkillsContainer>
            <Header/>
            <CircleProgressBar/>
        </SkillsContainer>
    );
};

export default Skills;
