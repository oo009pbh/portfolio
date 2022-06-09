import React from 'react';
import loadable from '@loadable/component'; // 코드 스플리팅
import { Routes, Route, Navigate } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));

// const Workspace = loadable(() => import('@layouts/Workspace'));
// import LogIn from '@pages/Login';
// import SignUp from '@pages/SignUp';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate replace to="/main"/>} />
        <Route path="/main" element={<Main />} />
        {/*<Route path="/workspace/:workspace" component={Workspace} />*/}
      </Routes>
  );
};

export default App;