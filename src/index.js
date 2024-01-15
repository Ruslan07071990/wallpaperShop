import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ViwewContextProvider from "./context/ViewContextProvsder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ViwewContextProvider>
        <App />
      </ViwewContextProvider>
    </BrowserRouter>
  </Provider>
);
