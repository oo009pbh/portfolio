import React, {useState, useEffect} from 'react';
import loadable from "@loadable/component";

// Styles
import {Container, initial, chat, general} from '@pages/Main/styles';
import {css} from "@emotion/css";
// Components
const Header = loadable(() => import('@components/Header'));
const SideMenu = loadable(() => import('@components/SideMenu'));
const ChatRoom = loadable(() => import('@components/ChatRoom'));

const Main = () => {
    const [menuItem, setMenuItem] = useState([{
            name: 'Messenger',
            is_checked: true
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
    const [mode, setMode] = useState("initial");
    const [animation, setAnimation] = useState(css`animation: ${initial} 1s ease-in-out; animation-fill-mode: both;`);

    useEffect(() => {
        switch (mode) {
            case "chat":
                setAnimation(css`animation: ${chat} 1s ease-in-out; animation-fill-mode: both;`)
                break
            case "general":
                setAnimation(css`animation: ${general} 1s ease-in-out; animation-delay: 1.1s; animation-fill-mode: both;`)
                break
            default:
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
            setMode('general')
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
