import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Departments from './components/Departments';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />

        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);


export default App;
