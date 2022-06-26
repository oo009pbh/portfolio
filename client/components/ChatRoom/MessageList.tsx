import React, {useEffect, useState, FC} from 'react';
import {MessageListContainer, Balloon, Text} from './styles';
import {MEssageList} from '@typings/main';
import { css } from '@emotion/css'
import moment from "moment";
import 'moment/locale/ko'
import 'antd/dist/antd.css';
import { Avatar, Image, Divider } from 'antd';

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
                    <Avatar>병훈</Avatar>
                    <Text>
                        {msg.text}
                    </Text>
                </Balloon>
            ))}
        </MessageListContainer>
    );
};

export default MessageList;
