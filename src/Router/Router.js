import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Edit from '../Components/SideNavComponents/Edit';
import NewSchedule from '../Components/SideNavComponents/NewSchedule';
import SignIn from '../Components/SignIn/SignIn';
import Dashboard from '../Components/Home/Pages/Dashboard';
import HMShops from '../Components/Home/Pages/HMShops';
import Products from '../Components/Home/Pages/Products';
import Help from '../Components/Home/Pages/Help';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SignIn />} />
                <Route exact path="/home" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/home/products" element={<Products />} />
                    <Route path="/home/hospitals" element={<HMShops />} />
                    <Route path="/home/help" element={<Help />} />
                </Route>
                <Route exact path="/new" element={<NewSchedule />} />
                <Route exact path="/edit" element={<Edit />} />
                <Route exact path="/home/dashboard" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
