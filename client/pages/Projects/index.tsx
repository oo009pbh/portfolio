import React, {useState, useRef} from 'react';
import loadable from "@loadable/component";

// Styles
import {ProjectsContainer, ProjectsContent} from './styles';
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));
const ProjectCard = loadable(() => import('@components/ProjectCard'));
import ScrollHorizontal from 'react-scroll-horizontal';

const Projects = () => {
    return(
        <ProjectsContainer>
            <Header/>
            <ProjectsContent>
                <ScrollHorizontal reverseScroll>
                    <ProjectCard
                        imageName={'skillup'}
                        title={"스킬업"}
                        description={"교육강의 플랫폼으로 2차 개발 (매칭, 퀴즈) 부분을 담당하였습니다."}
                        dedication={"- 매칭, 퀴즈, 교육수강, 공지사항 등 퍼블리싱 \n- 각 페이지별 API 개발 및 연동 \n- DB 설계 참여"}
                        skills={"react node.js mysql"}
                        link={{url: "https://zebskillup.or.kr/"}}
                    />
                    <ProjectCard
                        imageName={'mobilif'}
                        title={"모빌리프"}
                        description={"고급원목가구 판매 사이트로, 1차 개발 (회사소개, 연혁, 마이페이지) 부분을 담당하였습니다."}
                        dedication={"- 회사소개, 연혁, 카탈로그, 마이페이지 등 퍼블리싱 \n- 각 페이지별 API 개발 및 연동"}
                        skills={"react node.js mysql"}
                        link={{url: "https://mobilif.co.kr/"}}
                    />
                    <ProjectCard
                        imageName={'nextzero'}
                        title={"넥스트 제로"}
                        description={"적용 자재에 따른 에너지를 계산하는 플랫폼으로, 수정 요청사항 반영 및 에너지계산 API 수정 부분을 담당하였습니다."}
                        dedication={"- 적용자재 메인페이지 등 퍼블리싱 \n- 에너지계산 API 수정"}
                        skills={"react node.js mysql"}
                        link={{}}
                    />
                    <ProjectCard
                        imageName={'portfolio'}
                        title={"포트폴리오"}
                        description={"저의 웹 포트폴리오로, 1인 제작한 프로젝트 입니다."}
                        dedication={"- 전 부분"}
                        skills={"react next.js emotion typescript"}
                        link={{github: "https://github.com/oo009pbh/portfolio"}}
                    />
                    <ProjectCard
                        imageName={'codeclass'}
                        title={"코드클래스"}
                        description={"세종대 졸업작품으로써, 코드를 공유하며 강의를 들을 수 있는 화상강의 플랫폼입니다."}
                        dedication={"- 각 페이지 컴포넌트화 및 구조화 \n- 웹 컴파일러 페이지 개발 담당 \n- 디자인 담당"}
                        skills={"react firebase"}
                        link={{github: "https://github.com/oo009pbh/CodeClass"}}
                    />
                    <ProjectCard
                        imageName={'opensource'}
                        title={"세종대 어디로 갈까?"}
                        description={"세종대 4학년 1학기 오픈소스 프로젝트로, 세종대 학식 정보들을 크롤링하여 보여주는 플랫폼입니다."}
                        dedication={"- 크롤링 기능 구현 \n- 전 페이지 퍼블리싱 \n- DB 설계"}
                        skills={"react node.js mysql puppeteer(크롤링)"}
                        link={{github: "https://github.com/oo009pbh/opensource-sw-project"}}
                    />
                </ScrollHorizontal>
            </ProjectsContent>
        </ProjectsContainer>
    );
};

export default Projects;
