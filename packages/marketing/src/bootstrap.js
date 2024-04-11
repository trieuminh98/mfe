import React from "react";
import ReactDom from "react-dom";
import App from "./app";
const mount = (el) => {
  ReactDom.render(<App />, el);
};

//Context/Situation #1
//We are running this file in development in isolation
//We are using our local index.html file
//Which DEFINITYLY has the element with an id of '_marketing-dev-root'
//We want to immediately render our app into the elements
if (process.env.NODE_ENV === "development") {
  //Assuming our app doesn't have element with id _marketing-dev-root
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    //We are probably running in isolation
    mount(el);
  }
}

//Context/Sitatuon #2
//We are running this file in development or production
//Through the CONTAINER app
//NO GUARUANTEE that elements have id '_marketing-dev-root'
//WE DO NOT WANT TRY to immediately render the app
export { mount };
