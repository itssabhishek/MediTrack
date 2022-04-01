import { useState } from 'react';

const Input = ({ type, id, placeholder, application }) => {
    const [input, setInput] = useState('');

    return (
        <div className="input h-[50px] relative">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                name={id}
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

export default Input;
