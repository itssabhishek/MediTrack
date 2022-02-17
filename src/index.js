import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Preloader from "./Preloader/Preloader";
import Navbar from "./Navbar/Navbar";
import {SignIn} from "./SIgnIn/SignIn";

ReactDOM.render(<React.StrictMode>
    <>
        {/*<Preloader/>*/}
        <Navbar/>
        {/*<SignIn/>*/}
    </>
</React.StrictMode>, document.getElementById("root"));
