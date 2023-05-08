import React, {useEffect, useState, FC} from 'react';
import moment from "moment";
import 'moment/locale/ko'
import loadable from "@loadable/component";

// Components
const ImojiAvatar = loadable(() => import('@components/ImojiAvatar'));
import { Avatar, Image, Divider } from 'antd';

// Styles

import { css } from '@emotion/css'
import {MessageListContainer, Balloon, Text} from './styles';

// Typings
import {MEssageList} from '@typings/main';

// Images
import hi from '@icon/hi.gif'


const MessageList: FC<MEssageList> = ({messages}) => {
    const [now, setNow] = useState('');

    useEffect(() => {
        moment.locale('ko')
        setNow(moment(new Date()).format("YYYY년 MM월 DD일"))
    }, []);


    return(
        <MessageListContainer>
            <Divider plain>{now}</Divider>
            {messages.map((msg, index) => (
                <Balloon key={index} position={msg.position} >
                    <div>
                        <ImojiAvatar size={40}/>
                        박병훈
                        <time>{moment(new Date()).format("YYYY.MM.DD")}</time>
                    </div>
                    <Text>
                        {msg.text ? msg.text : <img alt={"hi"} src={hi}/>}
                    </Text>
                </Balloon>
            ))}
        </MessageListContainer>
    );
};

export default MessageList;
