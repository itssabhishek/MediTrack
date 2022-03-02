import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Preloader from './Components/Preloader/Preloader';
import Home from './Components/Home/Home';
import { Dashboard } from './Components/Home/Pages/Dashboard';
import { SignIn } from './Components/SIgnIn/SignIn';

ReactDOM.render(
    <React.StrictMode>
        {/*<Preloader />*/}
        {/*<Home />*/}
        {/*<Dashboard />*/}
        <SignIn />
    </React.StrictMode>,
    document.getElementById('root')
);
