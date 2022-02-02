import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./Preloader";
import Navbar from "./Navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

ReactDOM.render(<React.StrictMode>
    <>
        <Preloader/>
        <Navbar/>
    </>
</React.StrictMode>, document.getElementById("root"));
