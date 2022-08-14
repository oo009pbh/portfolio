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
                    <div>
                        <h1>기본</h1>
                        <div className={"skills"}>
                            <CircleProgressBar percent={80} width={150} height={150} color={"#FFDE25"} description={"javascript"}/>
                            <CircleProgressBar percent={75} width={150} height={150} color={"#EF652A"} description={"html"}/>
                            <CircleProgressBar percent={80} width={150} height={150} color={"#1C88C7"} description={"css"}/>
                        </div>
                    </div>
                    <div>
                        <h1>코어</h1>
                        <div className={"skills"}>
                            <CircleProgressBar percent={75} width={150} height={150} color={"#00FFFFFF"} description={"react"}/>
                            <CircleProgressBar percent={50} width={150} height={150} color={"#007ACC"} description={"typescript"}/>
                            <CircleProgressBar percent={40} width={150} height={150} color={"#FFD849"} description={"nextjs"}/>
                        </div>
                    </div>
                </SkillsBox>
                <SkillsBox>
                    <div>
                        <h1>스타일링, 상태관리</h1>
                        <div className={"skills"}>
                            <CircleProgressBar percent={75} width={150} height={150} color={"#E34F26"} description={"emotion"}/>
                            <CircleProgressBar percent={70} width={150} height={150} color={"#764ABC"} description={"redux"}/>
                        </div>
                    </div>
                    <div>
                        <h1>패키지 매니저, 빌드</h1>
                        <div className={"skills"}>
                            <CircleProgressBar percent={70} width={150} height={150} color={"#CB3837"} description={"npm"}/>
                            <CircleProgressBar percent={50} width={150} height={150} color={"#8ED6FB"} description={"webpack"}/>
                        </div>
                    </div>
                </SkillsBox>
            </SkillContent>
            <SkillContent>
                <h1>BackEnd</h1>
                <SkillsBox>
                    <div>
                        <h1>DB</h1>
                        <div className={"skills"}>
                            <CircleProgressBar percent={70} width={150} height={150} color={"#D99C9F"} description={"mssql"}/>
                            <CircleProgressBar percent={80} width={150} height={150} color={"#DAA760"} description={"mysql"}/>
                        </div>
                    </div>
                    <div>
                        <h1>Server</h1>
                        <div className={"skills"}>
                            <CircleProgressBar percent={70} width={150} height={150} color={"#3770A1"} description={"python"}/>
                            <CircleProgressBar percent={50} width={150} height={150} color={"#6DA55F"} description={"nodejs"}/>
                        </div>
                    </div>
                </SkillsBox>
            </SkillContent>
        </SkillsContainer>
    );
};

export default Skills;
