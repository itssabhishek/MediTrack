import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Routing from './Router/Router';

//Main React Code
ReactDOM.render(<Routing />, document.getElementById('root'));
