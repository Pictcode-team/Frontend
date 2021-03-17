import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/index';
import Home from '../../Pages/Home/index';
import About from '../../Pages/About/index';
import Error from "../../Pages/Error/index";

import "../../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
