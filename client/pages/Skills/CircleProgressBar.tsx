import React, {useEffect, useState, FC} from 'react';
import {CircleContainer} from './styles';
import ReactLogo from '@logo/react.svg'

const CircleProgressBar = () => {

    return(
        <CircleContainer>
            <svg>
              <image href={ReactLogo}/>
              <circle className="bg" cx="57" cy="57" r="52"/>
              <circle className="meter-1" cx="57" cy="57" r="52"/>
            </svg>
        </CircleContainer>
    );
};

export default CircleProgressBar;
