import { createBrowserHistory, createMemoryHistory } from "history";
import React from "react";
import ReactDom from "react-dom";
import App from "./app";

const mount = (el, { onNavigate, defaultHistory, initialPath } = {}) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen((e) => onNavigate(e, "auth"));
  }

  ReactDom.render(<App {...{ history }} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const curPathname = history.pathname;
      if (curPathname !== nextPathname) {
        history.push(nextPathname);
        console.log("Auth is updated browser navigate based on container");
      }
    },
  };
};

//Context/Situation #1
//We are running this file in development in isolation
//We are using our local index.html file
//Which DEFINITYLY has the element with an id of '_auth-dev-root'
//We want to immediately render our app into the elements
if (process.env.NODE_ENV === "development") {
  //Assuming our app doesn't have element with id _auth-dev-root
  const el = document.querySelector("#_auth-dev-root");
  if (el) {
    //We are probably running in isolation
    mount(el, { defaultHistory: createBrowserHistory() }); // create browser history for dev mode
  }
}

//Context/Sitatuon #2
//We are running this file in development or production
//Through the CONTAINER app
//NO GUARUANTEE that elements have id '_auth-dev-root'
//WE DO NOT WANT TRY to immediately render the app
export { mount };
