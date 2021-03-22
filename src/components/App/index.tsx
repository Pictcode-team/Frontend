import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'material-react-toastify/dist/ReactToastify.css';

import Layout from '../Layout/index';
import Home from '../../Pages/Home/index';
import About from '../../Pages/About/index';
import Error from '../../Pages/Error/index';
import { ImagesProvider } from '../../utils/context/imagesContext.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route component={Error} />
          </Switch>
        </Layout>
      </ImagesProvider>
    </BrowserRouter>
  );
};

export default App;
