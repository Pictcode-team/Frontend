import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home} from '../Home/index'
import {Layout} from '../Layout/index'

import "../../styles/global.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
