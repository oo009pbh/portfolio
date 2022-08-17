import React, {useEffect, useState, FC} from 'react';
import {
    MessageInputContainer,
    InputButton
} from './styles';
import { useNavigate } from "react-router-dom";
import loadable from "@loadable/component";

// Components
import useModal from "@components/ProfileModal/useModal";
const ProfileModal = loadable(() => import('@components/ProfileModal'));

// Typings
import { MEssageInput } from "@typings/main";

const MessageInput: FC<MEssageInput> = ({onChangeMenu}) => {
    const {isShowing, toggle} = useModal();

    return(
        <MessageInputContainer>
            <InputButton onClick={() => onChangeMenu(1)}>그동안 어떻게 살아왔는지 알고 싶어요</InputButton>
            <InputButton onClick={() => onChangeMenu(2)}>어떠한 기술스택을 가지고 있나요?</InputButton>
            <InputButton onClick={() => onChangeMenu(3)}>어떠한 프로젝트들을 작업했나요?</InputButton>
            <InputButton onClick={toggle}>프로필을 보고 싶어요</InputButton>
            <ProfileModal hide={toggle} isShowing={isShowing}/>
        </MessageInputContainer>
    );
};

export default MessageInput;
