import React, {useState} from 'react';
import loadable from "@loadable/component";

// Styles
import { SkillsBox, SkillsContainer, SkillContent } from "./styles";
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));
const CircleProgressBar = loadable(() => import('./CircleProgressBar'));

const Skills = () => {
    return(
        <SkillsContainer>
            <Header/>
            <SkillContent>
                <h1>FrontEnd</h1>
                <SkillsBox>
                    <div className={"left"}>
                        <h1>기본</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"javascript"}/>
                        <CircleProgressBar percent={60} width={150} height={150} description={"html"}/>
                        <CircleProgressBar percent={60} width={150} height={150} description={"css"}/>
                    </div>
                    <div className={"right"}>
                        <h1>코어</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"react"}/>
                        <CircleProgressBar percent={60} width={150} height={150} description={"typescript"}/>
                        <CircleProgressBar percent={60} width={150} height={150} description={"nextjs"}/>
                    </div>
                </SkillsBox>
                <SkillsBox>
                    <div className={"left"}>
                        <h1>스타일링</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"emotion"}/>
                    </div>
                    <div className={"right"}>
                        <h1>상태관리</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"redux"}/>
                    </div>
                </SkillsBox>
                <SkillsBox>
                    <div className={"left"}>
                        <h1>빌드</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"webpack"}/>
                    </div>
                    <div className={"left"}>
                        <h1>패키지 매니저</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"npm"}/>
                    </div>
                </SkillsBox>
                <h1>BackEnd</h1>
                <SkillsBox>
                    <div className={"left"}>
                        <h1>DB</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"mssql"}/>
                        <CircleProgressBar percent={60} width={150} height={150} description={"mysql"}/>
                    </div>
                    <div className={"right"}>
                        <h1>Server</h1>
                        <CircleProgressBar percent={60} width={150} height={150} description={"python"}/>
                        <CircleProgressBar percent={60} width={150} height={150} description={"nodejs"}/>
                    </div>
                </SkillsBox>
            </SkillContent>
        </SkillsContainer>
    );
};

export default Skills;
