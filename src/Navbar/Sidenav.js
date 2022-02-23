const Sidenav = function () {
    return (
        <div className="navbar_side flex flex-col border-r-2 border-gray-500 p-3 items-end justify-between vh-100">
            <button className="w-fit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
            <footer>&copy; MediTrack</footer>
        </div>
    );
};

export default Sidenav;
