import React, {useState} from 'react';
import {Container, DownloadButton, fadein, HomeButton} from './styles';
import { css } from '@emotion/css'

const Main = () => {
    const [menuItem, setMenuItem] = useState([{
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

    return(
        <Container className={css`animation: ${fadein} 2s ease-in-out; animation-delay: 5s; animation-fill-mode: forwards;`}>
            <HomeButton>
                main
            </HomeButton>
            <ul>
                {(menuItem).map(item =>
                    <li>
                        {item.name}
                    </li>
                )}
            </ul>
            <DownloadButton>
                download
            </DownloadButton>
        </Container>
    );
};

export default Main;
