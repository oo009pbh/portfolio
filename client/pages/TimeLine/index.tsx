import React, {useState} from 'react';
import loadable from "@loadable/component";

// Styles
import {TimeLineContainer, TimeLineContent} from './styles';
import {css} from "@emotion/css";

// Components
const Header = loadable(() => import('@components/Header'));
const TimeLineBox = loadable(() => import('./TimeLineBox'));

const TimeLine = () => {
    const [timeLineArray, setTimeLineArray] = useState([
        {
            content: "세종대 소프트웨학과(구 디지털 콘텐츠학과) ",
            date: "2016-03-02 ~\n 2022-02-18",
            icon: "graduate",
            title: "세종대 입학",
            type: "",
            animation: "",
        },
        {
            content: "항공전단 CERT 감시병으로 복무했습니다.",
            date: "2018-02-19 ~\n 2019-12-15",
            icon: "military",
            title: "해군 만기전역",
            type: "",
            animation: "",
        },
        {
            content: "SI 업체 코드크레인(유한)에서 약 4개월 인턴을 했습니다.",
            date: "2021-09-01 ~\n 2021-12-22",
            icon: "intern",
            title: "ICT 인턴십",
            type: "",
            animation: "",
        },
        {
            content: "인턴으로 근무하던 회사에서 채용제안을 받아 현재까지도 재직중입니다.",
            date: "2022-01-03 ~",
            icon: "person",
            title: "코드크레인 재직",
            type: "",
            animation: "",
        }
    ]);

    return(
        <TimeLineContainer>
            <Header/>
            <TimeLineContent>
                {(timeLineArray || []).map((item, index) =>
                    <TimeLineBox
                        title={item.title}
                        date={item.date}
                        icon={item.icon}
                        index={index}
                        animation={item.animation}
                        content={item.content}
                    />
                )}
            </TimeLineContent>
        </TimeLineContainer>
    );
};

export default TimeLine;
