import React, {useEffect, useState, FC} from 'react';
import {SideMenuContainer, Profile, Menu, profileWiden, profileShrink, menuWiden, menuShrink, avatarWiden, avatarShrink} from './styles';
import {MessageOutlined, FieldTimeOutlined, ProjectOutlined, ToolOutlined} from '@ant-design/icons';
import { SIdeMenu } from '@typings/main';
import { css } from '@emotion/css'
import 'antd/dist/antd.css';
import { Avatar, Image } from 'antd';

import imoji1 from '@profile/AR_imoji1.jpg'


const SideMenu: FC<SIdeMenu> = ({onChangeMenu, menuItem, mode}) => {

    const [animation, setAnimation] = useState({
        profile: css`animation: ${profileWiden} 0.5s ease-in-out; animation-delay: 1s; animation-fill-mode: both`,
        menu: css`animation: ${menuWiden} 0.5s ease-in-out; animation-delay: 1.5s; animation-fill-mode: both`,
        avatar: css`animation: ${avatarWiden} 0.5s ease-in-out; animation-delay: 1s; animation-fill-mode: both`,
    });

    useEffect(() => {
        switch (mode) {
            case "initial":
                break
            case "chat":
                setAnimation({
                    profile: css`animation: ${profileWiden} 0.5s ease-in-out; animation-delay: 1s; animation-fill-mode: both`,
                    menu: css`animation: ${menuWiden} 0.5s ease-in-out; animation-delay: 1.5s; animation-fill-mode: both`,
                    avatar: css`animation: ${avatarWiden} 0.5s ease-in-out; animation-delay: 1s; animation-fill-mode: both`,
                });
                break
            default:
                setAnimation({
                    profile: css`animation: ${profileShrink} 0.5s ease-in-out; animation-delay: 0.6s; animation-fill-mode: both`,
                    menu: css`animation: ${menuShrink} 0.5s ease-in-out; animation-delay: 0.1s; animation-fill-mode: both`,
                    avatar: css`animation: ${avatarShrink} 0.5s ease-in-out; animation-delay: 0.6s; animation-fill-mode: both`,
                });
                break
        }
    }, [mode]);

    const renderIcon = (name: string) => {
        let element = undefined;
        switch (name) {
            case "Messenger":
                element = <MessageOutlined/>
                break
            case "TimeLine":
                element = <FieldTimeOutlined/>
                break
            case "Skills":
                element = <ToolOutlined/>
                break
            case "Projects":
                element = <ProjectOutlined/>
                break
            default:
                break
        }
        return element
    }

    return(
        <SideMenuContainer>
            <Profile className={animation.profile}>
                <Avatar src={imoji1} className={animation.avatar}>병훈</Avatar>
                <span className={(mode === 'chat'|| mode === 'initial') ? '' : 'none' }>박병훈</span>
                <span className={(mode === 'chat'|| mode === 'initial') ? '' : 'none' }>oo009pbh@gmail.com</span>
            </Profile>
            <Menu className={animation.menu}>
                {
                    (menuItem || []).map((item, index) =>
                        <li className={item.is_checked ? "active" : ""}
                            key={item.name}
                            onClick={() => onChangeMenu(index)}
                        >
                            {renderIcon(item.name)}
                            <span>{item.name}</span>
                        </li>
                    )
                }
            </Menu>
        </SideMenuContainer>
    );
};

export default SideMenu;
