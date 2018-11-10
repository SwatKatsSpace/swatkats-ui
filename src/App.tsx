import React, { SFC, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { BaseContainer } from "./app/containers/BaseContainer";
import { SignupContainer } from "./app/containers/SignupContainer";
import { ArticleListContainer } from "./app/containers/ArticleListContainer";


const AppComponent: SFC = () => (
  <Router basename="/swatkats">
    <Fragment>
      <Route exact path="/" component={BaseContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/list" component={ArticleListContainer} />
    </Fragment>
  </Router>
);

export const App = AppComponent;
