import React, {FC, useState} from 'react';
import loadable from "@loadable/component";

// Images
import imoji1 from '@profile/AR_imoji1.jpg'

// Components
import useModal from "@components/ProfileModal/useModal";
const ProfileModal = loadable(() => import('@components/ProfileModal'));
import { Avatar, Image } from 'antd';

// Typings
import { AVatar } from "@typings/main";

// Styles

import {Container} from './styles';

const ImojiAvatar: FC<AVatar> = ({size, className=''}) => {
    const {isShowing, toggle} = useModal();

    return(
        <Container onClick={toggle}>
            <Avatar src={imoji1} size={size || 40} className={className}/>
            <ProfileModal hide={toggle} isShowing={isShowing}/>
        </Container>
    );
};

export default ImojiAvatar;
