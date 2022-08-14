import React, {useEffect, useState, FC} from 'react';
import {CircleContainer, Circle} from './styles';

// Images
import CssLogo from '@logo/css.svg'
import EmotionLogo from '@logo/emotion.svg'
import HtmlLogo from '@logo/html.svg'
import JavascriptLogo from '@logo/javascript.svg'
import MssqlLogo from '@logo/mssql.svg'
import MysqlLogo from '@logo/mysql.svg'
import NextJsLogo from '@logo/next-js.svg'
import PythonLogo from '@logo/python.svg'
import ReactLogo from '@logo/react.svg'
import TypeScriptLogo from '@logo/typescript.svg'
import NodeJsLogo from '@logo/nodejs.svg'
import ReduxLogo from '@logo/redux.svg'
import WebpackLogo from '@logo/webpack.svg'
import NpmLogo from '@logo/npm.svg'

// Typings
import { CIrcle } from "@typings/main";

const CircleProgressBar: FC<CIrcle> = ({percent, width, height, description, color}) => {

    const selectImage = (description:string) => {
        switch (description) {
            case 'react':
                return ReactLogo;
            case 'javascript':
                return JavascriptLogo;
            case 'html':
                return HtmlLogo;
            case 'css':
                return CssLogo;
            case 'emotion':
                return EmotionLogo;
            case 'mssql':
                return MssqlLogo;
            case 'mysql':
                return MysqlLogo;
            case 'nextjs':
                return NextJsLogo;
            case 'python':
                return PythonLogo;
            case 'typescript':
                return TypeScriptLogo;
            case 'nodejs':
                return NodeJsLogo;
            case 'webpack':
                return WebpackLogo;
            case 'redux':
                return ReduxLogo;
            case 'npm':
                return NpmLogo;
            default:
                return null;
        }
    }
    return(
        <CircleContainer>
            <Circle percent={percent} width={width} height={height} description={description} color={color}>
                <image href={selectImage(description)}/>
                <circle className="bg" cx={width / 2} cy={height / 2} r={width / 2 - 5}/>
                <circle className="meter" cx={width / 2} cy={height / 2} r={width / 2 - 5}/>
                <text x={width / 2 - 10} y={(height / 10) * 9} className="animated fadeIn delay-1">{percent + "%"}</text>
            </Circle>
            <p>{description}</p>
        </CircleContainer>
    );
};

export default CircleProgressBar;
