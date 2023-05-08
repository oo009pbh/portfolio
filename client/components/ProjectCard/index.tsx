import React, {FC, useState} from 'react';
import loadable from "@loadable/component";

// Components
import useModal from "@components/ProfileModal/useModal";
const ProfileModal = loadable(() => import('@components/ProfileModal'));
import { Avatar, Image } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Typings
import { PRojectCard } from "@typings/main";

// Styles

import {Container} from './styles';

const ProjectCard: FC<PRojectCard> = ({imageName, description, title, dedication, skills, link}) => {
    return(
        <Container imageName={imageName}>
            <div className="overlay">
                <div className="head">
                    <p>{title}</p>
                    <hr/>
                </div>
                <div className="description">
                    <p>설명:</p>
                    {description}
                </div>
                <div className="dedication">
                    <p>기여도:</p>
                    {dedication}
                </div>
                <div className="skills">
                    <p>기술스택:</p>
                    {skills}
                </div>
                <div className="link">
                    {link?.url &&
                        <a target="_blank" href={link?.url}><i className="fa-solid fa-house"/>홈페이지</a>
                    }
                    {link?.github &&
                        <a target="_blank" href={link?.github}><i className="fa-brands fa-github"/>깃허브</a>
                    }
                </div>
            </div>
        </Container>
    );
};

export default ProjectCard;
