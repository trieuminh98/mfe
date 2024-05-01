import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/marketing-app";

const generationClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generationClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
