import Sidenav from '../Navbar/Sidenav';
import Topnav from '../Navbar/Topnav';
import { Outlet } from 'react-router-dom';

const Home = function () {
    return (
        <div className="grid grid-cols-12">
            <div className="peer fixed sidenav w-[127px] hover:w-[200px] transition-all duration-1000">
                <Sidenav />
            </div>
            <div className="peer-hover:ml-[70px] peer-hover:opacity-5 h-screen transition-all duration-1000 grid grid-rows-[80px_1fr] col-start-2 col-span-full">
                <Topnav />
                <main className="main_content border-l-2 border-black p-3 bg-white">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Home;
