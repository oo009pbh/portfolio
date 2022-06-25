import React, {useEffect, useState, FC} from 'react';
import {
    ChatRoomContainer,
    profileWiden,
    profileShrink,
    menuWiden,
    menuShrink
} from './styles';
import { SIdeMenu } from '@typings/main';
import { css } from '@emotion/css'

const ChatRoom: FC<SIdeMenu> = ({onChangeMenu, menuItem, mode}) => {

    const [animation, setAnimation] = useState({
        profile: css`animation: ${profileWiden} 0.5s ease-in-out; animation-delay: 1s; animation-fill-mode: both`,
        menu: css`animation: ${menuWiden} 0.5s ease-in-out; animation-delay: 1.5s; animation-fill-mode: both`,
    });

    useEffect(() => {
        switch (mode) {
            case "chat":
                setAnimation({
                    profile: css`animation: ${profileWiden} 0.5s ease-in-out; animation-delay: 1s; animation-fill-mode: both`,
                    menu: css`animation: ${menuWiden} 0.5s ease-in-out; animation-delay: 1.5s; animation-fill-mode: both`,
                });
                break
            case "general":
                setAnimation({
                    profile: css`animation: ${profileShrink} 0.5s ease-in-out; animation-delay: 0.6s; animation-fill-mode: both`,
                    menu: css`animation: ${menuShrink} 0.5s ease-in-out; animation-delay: 0.1s; animation-fill-mode: both`,
                });
                break
            default:
                break
        }
    }, [mode]);

    return(
        <ChatRoomContainer>

        </ChatRoomContainer>
    );
};

export default ChatRoom;
