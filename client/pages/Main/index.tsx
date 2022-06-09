import React from 'react';
import loadable from "@loadable/component";

// Styles
import { Button, Error, Form, Input, Label, LinkContainer, Success } from '@pages/Main/styles';

// Components
const SideMenu = loadable(() => import('@components/SideMenu'));

const Main = () => {
  return(
      <div id="container">
        <SideMenu/>
      </div>
  );
};

export default Main;
