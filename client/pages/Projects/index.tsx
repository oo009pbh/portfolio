import React, {useState} from 'react';
import loadable from "@loadable/component";

// Styles
import {ProjectsContainer} from './styles';
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));

const Projects = () => {
    return(
        <ProjectsContainer>
            <Header/>

        </ProjectsContainer>
    );
};

export default Projects;
