import React, {useState} from 'react';
import loadable from "@loadable/component";

// Styles
import { SkillsBox, SkillsContainer } from "./styles";
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));
const CircleProgressBar = loadable(() => import('./CircleProgressBar'));

const Skills = () => {
    return(
        <SkillsContainer>
            <Header/>
            <SkillsBox>
              <CircleProgressBar percent={60} width={500} height={500}/>
            </SkillsBox>
        </SkillsContainer>
    );
};

export default Skills;
