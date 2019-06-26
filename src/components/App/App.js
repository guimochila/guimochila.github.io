import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../Footer';
import Home from '../Home';
import Navbar from '../Navbar';
import NotFound from '../NotFound';
import Resume from '../Resume';

const Main = styled.div`
  flex-grow: 1;
  margin-top: 4rem;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
