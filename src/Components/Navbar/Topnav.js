import { Link } from 'react-router-dom';
const Topnav = () => {
    return (
        <nav className="navbar_top flex items-center bg-slate-800 ">
            <ul className="nav_items w-4/6 flex items-center my-auto justify-between">
                <li>
                    <img
                        src={'/images/MediTrackIcon.png'}
                        alt="MediTrack"
                        className="h-16 h-16"
                    />
                </li>
                <li>
                    <Link
                        to="/home"
                        className={`text-lg text-blue-500 no-underline nav_item text-yellow-400 hover:text-yellow-400`}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/home/products'}
                        className={
                            'text-lg text-blue-500 no-underline nav_item hover:text-yellow-400'
                        }
                    >
                        Healthcare Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="/home/hospitals"
                        className={
                            'text-lg text-blue-500 no-underline nav_item hover:text-yellow-400'
                        }
                    >
                        Hospitals & Medical Shops
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/home/help'}
                        className={
                            'text-lg text-blue-500 no-underline nav_item hover:text-yellow-400'
                        }
                    >
                        Help
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Topnav;
