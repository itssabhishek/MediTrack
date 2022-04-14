import React from 'react';

const ProductsItems = [
    {
        img: 'icons8-vitamin-50.png',
        heading: 'Vitamins',
        description:
            'Vitamins are a group of substances that are needed for normal cell function, growth, and development.',
        link: 'https://www.amazon.in/multivitamin/s?k=multivitamin',
    },
    {
        img: 'icons8-protein-50.png',
        heading: 'Proteins',
        description:
            "Proteins are large, complex molecules that play many critical roles in the body. They do most of the work in cells and are required for the structure, function, and regulation of the body's tissues and organs",
        link: 'https://www.amazon.in/b?ie=UTF8&node=12322829031',
    },
    {
        img: 'icons8-minerals-50.png',
        heading: 'Minerals',
        description:
            'Minerals are those elements on the earth and in foods that our bodies need to develop and function normally.',
        link: 'https://www.amazon.in/b?ie=UTF8&node=17296396031',
    },
    {
        img: 'icons8-skincare-50.png',
        heading: 'Skincare',
        description:
            'Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. They can include nutrition, avoidance of excessive sun exposure and appropriate use of emollients.',
        link: 'https://www.amazon.in/Skin-Care/b?ie=UTF8&node=1374407031',
    },
    {
        img: 'icons8-child-50.png',
        heading: 'Babycare',
        description:
            'Raising kids is one of the toughest and most fulfilling jobs in the world — and the one for which you might feel the least prepared.',
        link: 'https://www.amazon.in/Baby-Care/b?ie=UTF8&node=1953111031',
    },
    {
        img: 'icons8-bandage-50.png',
        heading: 'Firstaid',
        description:
            'First aid is the first and immediate assistance given to any person suffering from either a minor or serious illness or injury, with care provided to preserve life, prevent the condition from worsening, or to promote recovery. ',
        link: 'https://www.amazon.in/First-Aid-Kit/s?k=First+Aid+Kit',
    },
];

const Modal = ({ img, heading, description, link }) => {
    return (
        <div className="product_container bg-yellow-500 rounded rounded-2xl overflow-y-hidden w-full shadow">
            <div className="image-box bg-slate-800 h-[100px] py-3">
                <img
                    src={`/images/icons/${img}`}
                    className="mx-auto h-[60px] hover:scale-150 hover:rotate-12 transition duration-500 "
                    alt={img}
                />
            </div>
            <div className="text-box p-2">
                <div className="heading flex justify-between">
                    <h2 className="item text-slate-800 font-extrabold inline">
                        {heading}
                    </h2>
                    <a
                        className="bg-blue-500 rounded-full flex justify-center items-center w-[50px]"
                        href={link}
                        target={'_blank'}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6  text-blue-900  hover:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </a>
                </div>
                <p className="description text-gray-500 text-[12px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Products = () => {
    return (
        <div className="products animate__animated animate__fadeInUp">
            <div className="grid grid-rows-[10vh_1fr]">
                <h1 className="text-[#219653]">
                    <span className="font-extralight">Shop, </span>
                    Healthcare Products
                </h1>

                <div className="product_category">
                    <ul className=" grid grid-rows-2 grid-cols-4 gap-2 justify-items-center h-[70vh]">
                        {ProductsItems.map((el, index) => {
                            return (
                                <Modal
                                    key={index}
                                    img={el.img}
                                    heading={el.heading}
                                    description={el.description}
                                    link={el.link}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Products;
