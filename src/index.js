import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-L4T59HDT4G");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
);
