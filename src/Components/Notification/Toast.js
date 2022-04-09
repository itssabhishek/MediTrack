const NotifyToast = ({ heading, message }) => {
    const clickHandler = (e) => {
        e.target.closest('.toast_container').remove();
    };
    return (
        <div
            className=" bg-blue-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-mdb-autohide="false"
        >
            <div className="bg-blue-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-blue-500 rounded-t-lg">
                <p className="font-bold text-white flex items-center">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="info-circle"
                        className="w-4 h-4 mr-2 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                        />
                    </svg>
                    {heading}
                </p>
                <div className="flex items-center">
                    <p className="text-white opacity-90 text-xs">
                        Few seconds ago..
                    </p>
                    <button
                        type="button"
                        className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                        data-mdb-dismiss="toast"
                        aria-label="Close"
                        onClick={clickHandler}
                    />
                </div>
            </div>
            <div className="p-3 bg-blue-600 rounded-b-lg break-words text-white">
                {message}
            </div>
        </div>
    );
};

const SuccessToast = ({ heading, message }) => {
    const clickHandler = (e) => {
        e.target.closest('.toast_container').remove();
    };
    return (
        <div
            className="bg-green-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-mdb-autohide="false"
        >
            <div className="bg-green-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-green-400 rounded-t-lg">
                <p className="font-bold text-white flex items-center">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check-circle"
                        className="w-4 h-4 mr-2 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        />
                    </svg>
                    {heading}
                </p>
                <div className="flex items-center">
                    <p className="text-white opacity-90 text-xs">
                        Few seconds ago..
                    </p>
                    <button
                        type="button"
                        className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                        data-mdb-dismiss="toast"
                        aria-label="Close"
                        onClick={clickHandler}
                    />
                </div>
            </div>
            <div className="p-3 bg-green-500 rounded-b-lg break-words text-white">
                {message}
            </div>
        </div>
    );
};

const Toast = ({ type, heading, message }) => {
    return (
        <div className="toast_container absolute top-1 right-1 flex flex-col justify-end">
            {type === 'notify' && (
                <NotifyToast heading={heading} message={message} />
            )}
            {type === 'success' && (
                <SuccessToast heading={heading} message={message} />
            )}
        </div>
    );
};

export default Toast;
