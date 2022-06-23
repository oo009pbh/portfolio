import React from 'react';
import loadable from '@loadable/component'; // 코드 스플리팅
import { Routes, Route, Navigate } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));
const About = loadable(() => import('@pages/About'));
const TimeLine = loadable(() => import('@pages/TimeLine'));
const Skills = loadable(() => import('@pages/Skills'));
const Projects = loadable(() => import('@pages/Projects'));


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/main"/>} />
            <Route path="/main" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
};

export default App;