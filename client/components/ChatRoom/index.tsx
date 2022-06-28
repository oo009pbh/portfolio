import React, {useEffect, useState, FC} from 'react';
import {ChatRoomContainer, chatRoomWiden, chatRoomShrink} from './styles';
import { SIdeMenu, MEssages } from '@typings/main';
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import { css } from '@emotion/css'

const initialMessage = [
    { text: '안녕하세요!', position: 'left' },
    { text: '저의 웹 포트폴리오에 방문해주셔서 감사합니다!', position: 'left' },
    { text: '궁금하신점이 있으시면 채팅을 입력해주세요!', position: 'left' }
]


const ChatRoom: FC<SIdeMenu> = ({onChangeMenu, menuItem, mode}) => {
    const [animation, setAnimation] = useState(css`animation: ${chatRoomWiden} 0.5s ease-in-out; animation-delay: 2s; animation-fill-mode: both;`);
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                if (i === 3) {
                    setIsLoading(false);
                }
            }, 1000 * i);
        }
    }, []);

    useEffect(() => {
        if (!isLoading) {
            for (let i = 1; i <= 3; i++) {
                setTimeout(() => {
                    let temp:any = initialMessage.slice(0,i);
                    setMessages(temp)
                }, 1000 * i);
            }
        }
    }, [isLoading]);

    useEffect(() => {
        switch (mode) {
            case "initial":
                break
            case "chat":
                setAnimation(css`animation: ${chatRoomWiden} 0.5s ease-in-out; animation-delay: 2s; animation-fill-mode: both;`);
                break
            default:
                setAnimation(css`animation: ${chatRoomShrink} 1s ease-in-out; animation-fill-mode: both;`);
                break
        }
    }, [mode]);

    return(
        <ChatRoomContainer className={animation}>
            <MessageList messages={messages}/>
            <MessageInput />
        </ChatRoomContainer>
    );
};

export default ChatRoom;
