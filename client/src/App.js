import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./Resources/Styles/global";

import {
  Home,
  SignUp,
  SignIn,
  Services,
  Client,
  Driver,
  Admin,
  Profile,
} from "./pages";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/services">
          <Services withNav="true" />
        </Route>

        <Route exact path="/driver/sign-up">
          <SignUp route="driver" />
        </Route>
        <Route exact path="/driver/sign-in">
          <SignIn route="driver" />
        </Route>

        <Route exact path="/client/sign-up">
          <SignUp route="client" />
        </Route>
        <Route exact path="/client/sign-in">
          <SignIn route="client" />
        </Route>

        <Route exact path="/profile" component={Profile} />

        <Route path="/client" component={Client} />
        <Route path="/driver" component={Driver} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}
