import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyle";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <GlobalStyle />
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
