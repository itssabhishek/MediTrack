const TableRow = () => {
    return (
        <tr>
            <td className="pt-3-half" contentEditable="true">
                Abc
            </td>
            <td className="pt-3-half" contentEditable="true">
                1
            </td>
            <td className="pt-3-half" contentEditable="true">
                10
            </td>
            <td className="pt-3-half" contentEditable="true">
                07:00
            </td>
            <td className="pt-3-half">
                <span className="row-reset">
                    <a href="#!" className="indigo-text">
                        <button
                            type="button"
                            className="w-12 h-8 rounded-full bg-blue-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-700 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                                />
                            </svg>
                        </button>
                    </a>
                </span>
            </td>
            <td className="pt-3-half">
                <span className="row-save">
                    <a href="#!" className="indigo-text">
                        <button
                            type="button"
                            className="w-12 h-8 rounded-full bg-green-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-700 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                                />
                            </svg>
                        </button>
                    </a>
                </span>
            </td>
            <td>
                <span className="row-remove">
                    <button
                        type="button"
                        className="w-12 h-8 rounded-full bg-rose-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-rose-700 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </span>
            </td>
        </tr>
    );
};

export default TableRow;
