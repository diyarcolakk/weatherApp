import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App";
import { GlobalProvider } from "./components/Context/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>
);
