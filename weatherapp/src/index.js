import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { GlobalProvider } from "./components/Context/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>
);
