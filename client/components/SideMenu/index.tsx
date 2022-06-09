import React, {useEffect, useState} from 'react';
import {SideMenuContainer, SideMenuContent, example} from './styles';
import { css } from '@emotion/css'

const SideMenu = () => {
    const [menuItem, setMenuItem] = useState([{
        name: 'Home',
        is_checked: false
    },{
        name: 'About',
        is_checked: false
    },{
        name: 'TimeLine',
        is_checked: false
    },{
        name: 'Skills',
        is_checked: false
    },{
        name: 'Projects',
        is_checked: false
    }]);

    const onChangeMenu = (index: number) => {
        let newMenu = JSON.parse(JSON.stringify(menuItem));
        newMenu[index].is_checked = !newMenu[index].is_checked;
        setMenuItem(newMenu);
    }

    return(
        <SideMenuContainer>
            <SideMenuContent>
                {(menuItem || []).map((item, index) =>
                    <li key={"side" + index}
                        className={item.is_checked ? css`animation: ${example} 1s ease-in-out; animation-fill-mode: forwards;` : ''}
                        onClick={() => onChangeMenu(index)}
                        style={{zIndex: menuItem.length - index}}>
                        <a href={'/' + item}>
                            {item.name}
                        </a>
                    </li>
                )}
            </SideMenuContent>
        </SideMenuContainer>
    );
};

export default SideMenu;
