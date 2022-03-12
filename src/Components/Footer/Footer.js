import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear().toString().slice(2);
    return (
        <footer className={'mx-auto text-center'} style={{ width: '400px' }}>
            <div style={{ color: 'grey', fontSize: 0.6 + 'rem' }}>
                <span>
                    &copy; Copyright {`${year - 1} - ${year}`}. This project is
                    made by Deepa Upadhyay, Aditi Shardul, Pragya Tripathi and
                    Abhishek Tiwari. Do not claim as yours.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
