import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const lazyAuthApp = lazy(() => import("./components/auth-app"));
const lazyMarketingApp = lazy(() => import("./components/marketing-app"));

const generationClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generationClassName}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth" component={lazyAuthApp} />
            <Route path="/" component={lazyMarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
