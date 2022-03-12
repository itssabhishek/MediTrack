import { Link } from 'react-router-dom';

const Topnav = () => {
    return (
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
                    <li>
                        <Link
                            to={'/home'}
                            className={`text-blue-500 hover:text-blue-700`}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/home/products'}
                            className={'text-blue-500 hover:text-blue-700'}
                        >
                            Healthcare Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/home/hospitals'}
                            className={'text-blue-500 hover:text-blue-700'}
                        >
                            Hospitals & Medical Shops
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/home/help'}
                            className={'text-blue-500 hover:text-blue-700'}
                        >
                            Help
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Topnav;
