import React, {useEffect, useState, FC} from 'react';
import {SideMenuContainer, Profile, Menu, profileWiden, profileShrink, menuWiden, menuShrink} from './styles';
import {MessageOutlined, FieldTimeOutlined, ProjectOutlined, ToolOutlined} from '@ant-design/icons';
import { SIdeMenu } from '@typings/main';
import { css } from '@emotion/css'

const SideMenu: FC<SIdeMenu> = ({onChangeMenu, menuItem, mode}) => {

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
            <Profile className={animation.profile}/>
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
