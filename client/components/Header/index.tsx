import React, {useState} from 'react';
import {Container, headerWiden} from './styles';
import { css } from '@emotion/css'
import 'antd/dist/antd.css';
import { Avatar, Image } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuItem, setMenuItem] = useState([{
        name: 'main',
        is_checked: false
    },{
        name: 'timeline',
        is_checked: false
    },{
        name: 'skills',
        is_checked: false
    },{
        name: 'projects',
        is_checked: false
    }]);

    return(
        <Container>
            <span>
                <Avatar size={40}>병훈</Avatar>
            </span>
            <ul className={css`animation: ${headerWiden} 1s ease; animation-fill-mode: both;`}>
                {(menuItem).map(item =>
                    <li style={location.pathname.includes(item.name) ? {color: "#fddb3a" } : {}}
                        onClick={() => navigate("/" + item.name)}
                    >
                        {item.name}
                    </li>
                )}
            </ul>
        </Container>
    );
};

export default Header;
