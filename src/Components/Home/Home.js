import Sidenav from '../Navbar/Sidenav';
import Topnav from '../Navbar/Topnav';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HMShops from './Pages/HMShops';
import Products from './Pages/Products';
import Help from './Pages/Help';

const Home = function () {
    return (
        <BrowserRouter>
            <div className="grid grid-cols-12 ">
                <div className="peer sidenav w-[129px] hover:w-[200px] transition-all duration-1000">
                    <Sidenav />
                </div>
                <div className="peer-hover:ml-[70px] peer-hover:opacity-5 transition-all duration-1000 grid grid-rows-[80px_1fr] col-start-2 col-span-full">
                    <Topnav />
                    <main className="main_content border-l-2 border-black p-3 bg-white">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/home" element={<Dashboard />} />
                            <Route
                                path="/home/products"
                                element={<Products />}
                            />
                            <Route
                                path="/home/hospitals"
                                element={<HMShops />}
                            />
                            <Route path="/home/help" element={<Help />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Home;
