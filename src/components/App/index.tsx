import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/index';
import Home from '../../Pages/Home/index';
import About from '../../Pages/About/index';
import Error from "../../Pages/Error/index";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route component={Error}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
