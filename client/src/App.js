import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Department from './components/Department';
import Departments from './components/Departments';
import DepartmentForm from './components/DepartmentForm';
import ItemForm from './components/ItemForm';
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
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={Department} />
        <Route exact path="/departments/edit/:name/:id" component={DepartmentForm} />
        <Route exact path="/departments/:department_id/items/new" component={ItemForm} />
        <Route exact path="/departments/:department_id/edititem/:id/:name/:description/:cost" component={ItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);


export default App;
