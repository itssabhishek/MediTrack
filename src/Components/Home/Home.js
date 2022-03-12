import Sidenav from '../Navbar/Sidenav';
import Topnav from '../Navbar/Topnav';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Example = () => {
    return <h1>Hi</h1>;
};

const Home = function () {
    return (
        <BrowserRouter>
            <div className="grid grid-cols-12 ">
                <div className="peer sidenav w-[129px] hover:w-[200px] transition-all duration-1000">
                    <Sidenav />
                </div>
                <div className="peer-hover:ml-[70px] peer-hover:opacity-5 transition-all duration-1000 grid grid-rows-[80px_1fr] col-start-2 col-span-full">
                    <Topnav />
                    <main className="main_content grid grid-rows-[10%_50%_40%]">
                        <Routes>
                            <Route path={'/home'} element={<Dashboard />} />
                            <Route
                                path="/home/products"
                                element={<Example />}
                            />
                            <Route
                                path="/home/hospitals"
                                element={<Dashboard />}
                            />
                            <Route path="/home/help" element={<Dashboard />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Home;
