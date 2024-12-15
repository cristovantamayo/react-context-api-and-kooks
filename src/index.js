import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global-style.css";

import { Home } from "./templates/Home";
import { CounterContextProvider } from "./contexts/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </StrictMode>,
);
