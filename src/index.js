import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./Preloader";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Preloader />
  </React.StrictMode>,
  document.getElementById("root")
);
