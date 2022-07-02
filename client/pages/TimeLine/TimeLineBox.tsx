import React, {useEffect, useState, FC} from 'react';
import {TimeLineBoxContainer} from './styles';
import {TImeLine, SIdeMenu} from '@typings/main';
import { faUserGraduate, faUserPen, faPersonMilitaryRifle, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from '@emotion/css'

const TimeLineBox : FC<TImeLine> = ({content, date, icon, title, animation, index}) => {

    const renderIcon = (name: string) => {
        let element = undefined;
        switch (name) {
            case "graduate":
                element = <FontAwesomeIcon icon={faUserGraduate} />
                break
            case "military":
                element = <FontAwesomeIcon icon={faPersonMilitaryRifle} />
                break
            case "intern":
                element = <FontAwesomeIcon icon={faUserPen} />
                break
            case "person":
                element = <FontAwesomeIcon icon={faUserTie} />
                break
            default:
                break
        }
        return element
    }
    return(
        <TimeLineBoxContainer className={`type${index} animated fadeInUp delay-${index + 1}s`}>
            <div className="icon">
                {renderIcon(icon)}
            </div>
            <div className="date">{date}</div>
            <div className="content">
                <div className="title">{title}</div>
                <div className="description"><p>{content}</p></div>
            </div>
        </TimeLineBoxContainer>
    );
};

export default TimeLineBox;
