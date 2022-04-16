import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const Sidenav = function () {
    const logout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        localStorage.removeItem('jwt');
    };
    return (
        <div
            className={`group navbar_side bg-white flex flex-col py-3 items-center hover:px-4 justify-evenly vh-100`}
        >
            <div className="flex-1 flex flex-col justify-start items-center">
                <button className="w-fit group-hover:rotate-180  transition-all duration-1000">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>

                <ul className="sidenav_options flex flex-col h-[100px] justify-between p-0 mt-10">
                    {/*<li className="sidenav_options--list hover:bg-green-200 p-2 rounded ">*/}
                    {/*    <Link*/}
                    {/*        to="/new"*/}
                    {/*        className="text-black text-lg no-underline font-medium  flex items-center gap-2 justify-between"*/}
                    {/*    >*/}
                    {/*        <p className="hidden group-hover:inline m-0">*/}
                    {/*            Schedule*/}
                    {/*        </p>*/}

                    {/*        <svg*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*            className="h-6 w-6 text-green-600"*/}
                    {/*            fill="none"*/}
                    {/*            viewBox="0 0 24 24"*/}
                    {/*            stroke="currentColor"*/}
                    {/*        >*/}
                    {/*            <path*/}
                    {/*                strokeLinecap="round"*/}
                    {/*                strokeLinejoin="round"*/}
                    {/*                strokeWidth={2}*/}
                    {/*                d="M12 4v16m8-8H4"*/}
                    {/*            />*/}
                    {/*        </svg>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li className="sidenav_options--list hover:bg-green-200 mt-4 p-2 rounded">
                        <Link
                            to="/edit"
                            className="text-black text-lg no-underline font-medium  flex items-center gap-2 justify-between "
                        >
                            <p className="hidden group-hover:inline m-0 transition-all duration-1000">
                                Edit
                            </p>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li className="sidenav_options--list hover:bg-green-200 mt-4 p-2 rounded">
                        <Link
                            to="/"
                            className="text-black text-lg no-underline font-medium flex gap-2 items-center justify-between"
                        >
                            <GoogleLogout
                                clientId="288536530772-8des996l5mafrbti3lusb8oip9qtbh4r.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <p
                                        onClick={renderProps.onClick}
                                        className="hidden group-hover:inline m-0 transition-all duration-1000"
                                    >
                                        Logout
                                    </p>
                                )}
                                onLogoutSuccess={logout}
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <footer>&copy; MediTrack</footer>
        </div>
    );
};

export default Sidenav;
