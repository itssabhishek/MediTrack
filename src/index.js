import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Home from './Components/Home/Home';
import Edit from './Components/SideNavComponents/Edit';

//Main React Code
ReactDOM.render(<Edit />, document.getElementById('root'));

//Custom code
//Highlight selected page link on Topnav
const navLink = document.querySelector('.nav_items');
const navLinks = document.querySelectorAll('.nav_item');
navLink.addEventListener('click', function (e) {
    navLinks.forEach((el) => el.classList.remove('text-yellow-400'));

    !e.target.classList.contains('text-yellow-400') &&
        e.target.classList.add('text-yellow-400');
});
