import React, {useEffect, useState, FC} from 'react';
import {CircleContainer} from './styles';
import ReactLogo from '@logo/react.svg'
import { CIrcle } from "@typings/main";

const CircleProgressBar: FC<CIrcle> = ({percent, width, height}) => {

    return(
        <CircleContainer percent={percent} width={width} height={height}>
            <image href={ReactLogo}/>
            <circle className="bg" cx={width / 2} cy={height / 2} r={width / 2 - 5}/>
            <circle className="meter-1" cx={width / 2} cy={height / 2} r={width / 2 - 5}/>
        </CircleContainer>
    );
};

export default CircleProgressBar;
