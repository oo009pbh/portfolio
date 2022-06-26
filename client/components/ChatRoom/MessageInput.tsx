import React, {useEffect, useState, FC} from 'react';
import {
    MessageInputContainer,
    InputButton
} from './styles';
import { SIdeMenu } from '@typings/main';
import { css } from '@emotion/css'

const MessageInput = () => {

    return(
        <MessageInputContainer>
            <InputButton>이력서를 보고 싶어요</InputButton>
            <InputButton>그동안 어떻게 살아왔는지 알고 싶어요</InputButton>
            <InputButton>어떠한 프로젝트들을 작업했나요?</InputButton>
            <InputButton>어떠한 기술스택을 가지고 있나요?</InputButton>
            <InputButton>프로필을 보고 싶어요</InputButton>
        </MessageInputContainer>
    );
};

export default MessageInput;
