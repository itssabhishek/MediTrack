import Sidenav from '../Navbar/Sidenav';
import Dashboard from '../Dashboard/Dashboard';
const List = (props) => {
    return (
        <li>
            <a
                href={props.text.toLowerCase().replaceAll(' ', '')}
                className={`${
                    props.sts === 'active'
                        ? 'text-blue-500 hover:text-blue-700'
                        : 'text-yellow-500 hover:text-blue-700'
                } text-lg`}
            >
                {props.text}
            </a>
        </li>
    );
};

const Home = function () {
    return (
        <div className="grid grid-cols-12">
            <Sidenav />
            <div className="grid grid-rows-[80px_1fr] col-start-2 col-span-full">
                <nav className="navbar_top flex items-center bg-slate-800 ">
                    <div className="nav_items w-4/6">
                        <ul className="flex items-center my-auto justify-between">
                            <li>
                                <img
                                    src={'/images/MediTrackIcon.png'}
                                    alt="MediTrack"
                                    className="h-16 h-16"
                                />
                            </li>
                            <List text="Dashboard" sts={'active'} />
                            <List text="Healthcare Products" />
                            <List text="Hospitals & Medical Shops" />
                            <List text="Help" />
                        </ul>
                    </div>
                </nav>
                <main className="main_content grid grid-rows-[10%_50%_40%]">
                    <Dashboard />
                </main>
            </div>
        </div>
    );
};

export default Home;
