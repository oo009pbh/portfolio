import React, {useState, useEffect} from 'react';
import loadable from "@loadable/component";
import { useNavigate } from "react-router-dom";

// Styles
import {Container, initial, chat, general} from '@pages/Main/styles';
import {css} from "@emotion/css";

// Components
const SideMenu = loadable(() => import('@components/SideMenu'));
const ChatRoom = loadable(() => import('@components/ChatRoom'));

const Main = () => {
    const [menuItem, setMenuItem] = useState([
        {
            name: 'Messenger',
            url: 'main',
            is_checked: true
        },{
            name: 'TimeLine',
            url: 'timeline',
            is_checked: false
        },{
            name: 'Skills',
            url: 'skills',
            is_checked: false
        },{
            name: 'Projects',
            url: 'projects',
            is_checked: false
        }]
    );
    const [mode, setMode] = useState("initial");
    const [animation, setAnimation] = useState(css`animation: ${initial} 1s ease-in-out; animation-fill-mode: both;`);
    const navigate = useNavigate();

    useEffect(() => {
        switch (mode) {
            case "initial":
                break
            case "chat":
                setAnimation(css`animation: ${chat} 1s ease-in-out; animation-fill-mode: both;`);
                break
            default:
                setAnimation(css`animation: ${general} 1s ease-in-out; animation-delay: 1.1s; animation-fill-mode: both;`);
                setTimeout(() => navigate("/" + mode + "?fromMain=true"), 2100);
                break
        }
    }, [mode]);

    const onChangeMenu = (index: number) => {
        let newMenu = JSON.parse(JSON.stringify(menuItem));
        if (newMenu[index].is_checked) {
            return;
        } else {
            newMenu = (newMenu || []).map((item: object, m_index: number) =>
                Object.assign(item, {is_checked: m_index === index})
            )
        }
        if (newMenu[0].is_checked) {
            setMode('chat');
        } else {
            setMode(newMenu[index].url);
        }
        setMenuItem(newMenu);
    }

    return(
        <Container>
            <article className={animation}>
                <SideMenu onChangeMenu={onChangeMenu} menuItem={menuItem} mode={mode}/>
                <ChatRoom onChangeMenu={onChangeMenu} menuItem={menuItem} mode={mode}/>
            </article>
        </Container>
    );
};

export default Main;
