import React, { useState } from 'react';
import classes from './NewSchedule.module.css';
import Footer from '../Footer/Footer';

const Input = ({ type, id, placeholder }) => {
    const [input, setInput] = useState('');
    return (
        <div className="input h-[50px] relative">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                min="1"
                value={input}
                onInput={(e) => setInput(e.target.value)}
                className="input_text peer h-full w-full rounded outline-2 outline-green-600 border-2 border-blue-500 indent-3 text-lg absolute"
            />
            <label
                htmlFor={id}
                className={`${
                    input ? 'inline' : 'hidden'
                } peer-focus:inline text-sm text-gray-500 absolute ml-3 -mt-3 bg-white p-1`}
            >
                {placeholder}
            </label>
        </div>
    );
};

const NewSchedule = () => {
    return (
        <div
            className="h-full"
            // style={{
            //     backgroundImage: 'url("/images/new.png")',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundAttachment: 'fixed',
            //     backgroundSize: 'cover',
            // }}
        >
            <form className={classes.wrapper}>
                <Input type="text" id="mName" placeholder="Medicine Name" />
                <Input type="number" id="mDoses" placeholder="Doses" />
                <Input type="number" id="mStock" placeholder="Stock" />
                <Input type="time" id="mTime" placeholder="Time" />
                <button
                    type="submit"
                    className="submit_Button h-auto w-full rounded bg-green-500 hover:bg-green-600 border-2 text-lg text-white"
                >
                    Submit
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default NewSchedule;
