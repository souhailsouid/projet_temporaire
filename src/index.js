import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/" component={PresentationPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
