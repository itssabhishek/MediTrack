import React from 'react';

//This code is taken from https://tailwind-elements.com/docs/standard/components/modal/
const Modal = () => {
    return (
        <>
            {/*Button trigger modal*/}
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Launch demo modal
            </button>
            {/*// Modal*/}
            <div
                class="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Products = () => {
    return (
        <div className="products animate__animated animate__fadeInUp">
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
