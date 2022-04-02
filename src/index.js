import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Routing from './Router/Router';

//Main React Code
ReactDOM.render(<Routing />, document.getElementById('root'));

// Highlight selected page link on Topnav
const navLink = document.querySelector('.nav_items');
const navLinks = document.querySelectorAll('.nav_item');
navLink.addEventListener('click', function (e) {
    navLinks.forEach((el) => el.classList.remove('!text-yellow-400'));
    e.target.classList.add('!text-yellow-400');
});
