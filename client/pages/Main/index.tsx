import React from 'react';
import loadable from "@loadable/component";

// Styles
import {blink, Container, typing} from '@pages/Main/styles';
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));

const Main = () => {
    return(
        <Container>
            <section>
                <span>
                    <p className={css`animation: ${typing} 2s steps(9), ${blink} .5s step-end infinite alternate;`}>
                        안녕하세요,
                    </p>
                </span>
                <ul>
                    <li>
                        <a href={"/timeline"}>
                            배움을 즐기며 성장하고
                        </a>
                    </li>
                    <li>
                        <a href={"/skills"}>
                            어떤 기술이든 도전하며
                        </a>
                    </li>
                    <li>
                        <a href={"/projects"}>
                            행동하는 개발자
                        </a>
                    </li>
                </ul>
                <span>
                    <p className={css`animation: ${typing} 2s steps(9), ${blink} .5s step-end infinite alternate;`}>
                        박병훈입니다.
                    </p>
                </span>
            </section>
        </Container>
    );
};

export default Main;
