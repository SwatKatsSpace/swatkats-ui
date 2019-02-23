import React, { SFC, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { SignupContainer } from "./app/containers/SignupContainer";
import { ArticleListContainer } from "./app/containers/article-list/ArticleListContainer";
import { ArticleContainer } from "./app/containers/article/ArticleContainer";
import { ArticleCreateContainer } from "./app/containers/article-create/ArticleCreateContainer";

const AppComponent: SFC = () => (
  <Router basename="/swatkats">
    <Fragment>
      <Route exact path="/" component={ArticleListContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/list" component={ArticleListContainer} />
      <Route exact path="/article/:articleUuid" component={ArticleContainer} />
      <Route exact path="/createarticle" component={ArticleCreateContainer} />
    </Fragment>
  </Router>
);

export const App = AppComponent;
