import React, {FC, useState} from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from "react-router-dom";
import loadable from "@loadable/component";

// Images
import imoji1 from '@profile/AR_imoji1.jpg'

// Styles
import {Container, headerWiden} from './styles';
import 'antd/dist/antd.css';
import { css } from '@emotion/css'

// Components
import { Avatar, Image } from 'antd';
const ImojiAvatar = loadable(() => import('@components/ImojiAvatar'));

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const qs = queryString.parse(location.search);

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
                <ImojiAvatar size={40}/>
            </span>
            <ul style={qs?.fromMain ? {} : {width:"80%"}}
                className={qs?.fromMain ? css`animation: ${headerWiden} 1s ease; animation-fill-mode: both;` : ''}>
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
