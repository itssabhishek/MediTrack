import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Home from './Components/Home/Home';
import { SignIn } from './Components/SIgnIn/SignIn';
import Topnav from './Components/Navbar/Topnav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewSchedule from './Components/SideNavComponents/NewSchedule';

ReactDOM.render(
    <React.StrictMode>
        {/*<SignIn />*/}
        <NewSchedule />
    </React.StrictMode>,
    document.getElementById('root')
);
