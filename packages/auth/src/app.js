import React from "react";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Route, Router, Switch } from "react-router-dom";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";

const generationClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generationClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
