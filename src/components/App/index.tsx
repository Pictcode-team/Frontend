import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home} from '../../Pages/Home/index';
import {About} from '../../Pages/About/index';
import {Layout} from '../Layout/index';
import { Unavailable } from "../../Pages/Unavailable";

import "../../styles/global.scss";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route>
            <Unavailable/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
