import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home} from '../Home/Home'
import {Layout} from '../Layout/Layout'

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
