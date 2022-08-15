import React, { FC, useState } from "react";
import ReactDOM from 'react-dom';

// Images
import imoji1 from "@profile/profile_image.jpg";

// Styles
import {ModalOverlay, ModalWrapper} from './styles';

// Typings
import { PRofileModal } from "@typings/main";

// Components
import { Avatar } from "antd";

const Index: FC<PRofileModal> = ({isShowing, hide}) => {

    if (isShowing) {
        return ReactDOM.createPortal(
            <React.Fragment>
                <ModalOverlay onClick={hide}/>
                <ModalWrapper className={`animated zoomIn faster`} aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div onClick={event => event.stopPropagation()} className={"modal"}>
                        <div className={"modalHeader"}>
                            <Avatar src={imoji1} size={130}/>

                            <div className={"modalDescription"}>
                                <p className={"white"}>안녕하세요</p>
                                <p className={"white"}>소통을 중시하고,</p>
                                <p>풀스택을 지향하고 있는</p>
                                <p>프론트엔드 개발자 박병훈입니다.</p>
                            </div>
                        </div>
                        <div className={"modalContent"}>
                            <h1>
                                ABOUT ME
                            </h1>
                            <hr/>
                            <p>
                                GitHub: https://github.com/oo009pbh
                            </p>
                            <p>
                                Email: oo009pbh@gmail.com
                            </p>
                            <p>
                                Age: 26세 (1997.11.09)
                            </p>
                            <p>
                                Education: 세종대학교 소프트웨어학과 (구 디지털콘텐츠)
                            </p>
                        </div>
                    </div>
                </ModalWrapper>
            </React.Fragment>, document.body
        )
    }
    else {
        return null;
    }
}

export default Index;