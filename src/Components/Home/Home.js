import Sidenav from '../Navbar/Sidenav';
import Dashboard from './Pages/Dashboard';
import Topnav from '../Navbar/Topnav';

const Home = function () {
    return (
        <div className="grid grid-cols-12 ">
            <div className="peer sidenav w-[129px] hover:w-[200px] transition-all duration-1000">
                <Sidenav />
            </div>
            <div className="peer-hover:ml-[70px] peer-hover:opacity-5 transition-all duration-1000 grid grid-rows-[80px_1fr] col-start-2 col-span-full">
                <Topnav />
                <main className="main_content grid grid-rows-[10%_50%_40%]">
                    <Dashboard />
                </main>
            </div>
        </div>
    );
};

export default Home;
