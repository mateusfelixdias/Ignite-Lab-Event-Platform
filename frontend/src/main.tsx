import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import "./style/global.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);