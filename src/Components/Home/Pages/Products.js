import React from 'react';

//This code is taken from https://tailwind-elements.com/docs/standard/components/modal/
const Modal = () => {
    return (
        <li className="product_container w-80">
            <button
                type="button"
                className="flex flex-col justify-around items-center px-6 py-2.5 w-full h-full bg-gradient-to-br from-[#38EF7D] to-[#11998E] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLong"
            >
                <span className="icon bg-green-300 h-[100px] w-[100px] rounded-full flex items-center justify-center">
                    <img
                        src={'/images/icons/icons8-vitamin-50.png'}
                        alt="Vitamin"
                    />
                </span>
                <p className="font-bold text-lg">Vitamins</p>
            </button>

            <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModalLong"
                tabIndex="-1"
                aria-labelledby="exampleModalLongLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                                className="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalLongLabel"
                            >
                                Vitamins
                            </h5>
                            <button
                                type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div
                            className="modal-body relative p-4"
                            style={{ height: 400 + 'px' }}
                        >
                            <h3 className="mb-5">Select from below</h3>
                            <ul className="grid grid-rows-3 grid-cols-2 h-50 justify-items-center content-center">
                                <li className="product_list">
                                    <a
                                        href=""
                                        className="no-underline text-lg  bg-blue-100 border-1 border-blue-700 px-3 py-2 rounded hover:bg-blue-300
                                        "
                                    >
                                        Vitamin A
                                    </a>
                                </li>
                                <li className="product_list">
                                    <a
                                        href=""
                                        className="no-underline text-lg  bg-blue-100 border-1 border-blue-700 px-3 py-2 rounded hover:bg-blue-300"
                                    >
                                        Vitamin B
                                    </a>
                                </li>
                                <li className="product_list">
                                    <a
                                        href=""
                                        className="no-underline text-lg  bg-blue-100 border-1 border-blue-700 px-3 py-2 rounded hover:bg-blue-300"
                                    >
                                        Vitamin C
                                    </a>
                                </li>
                                <li className="product_list">
                                    <a
                                        href=""
                                        className="no-underline text-lg  bg-blue-100 border-1 border-blue-700 px-3 py-2 rounded hover:bg-blue-300"
                                    >
                                        Vitamin D
                                    </a>
                                </li>
                                <li className="product_list">
                                    <a
                                        href=""
                                        className="no-underline text-lg  bg-blue-100 border-1 border-blue-700 px-3 py-2 rounded hover:bg-blue-300"
                                    >
                                        Vitamin E
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button
                                type="button"
                                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

const Products = () => {
    return (
        <div className="products">
            <div className="grid grid-rows-[10vh_1fr]">
                <h1 className="text-[#219653]">
                    Shop,
                    <span className="font-extralight"> Healthy Products</span>
                </h1>
                <div className="product_category">
                    <ul className=" grid grid-rows-2 grid-cols-3 gap-10 justify-items-center w-[80vw] h-[70vh]">
                        <Modal />
                        <Modal />
                        <Modal />
                        <Modal />
                        <Modal />
                        <Modal />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Products;
