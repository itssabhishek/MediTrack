const Input = (props) => {
    return (
        <div className="input h-[50px] w-full relative">
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                name={props.id}
                min="1"
                max={props.max}
                value={props.value}
                onChange={props.onChange}
                className="input_text peer h-full w-full rounded outline-2 outline-green-600 border-2 border-blue-500 indent-3 text-lg absolute"
            />
            <label
                htmlFor={props.id}
                className={`${
                    props.value ? 'inline' : 'hidden'
                } peer-focus:inline text-sm text-gray-500 absolute ml-3 -mt-3 bg-white p-1`}
            >
                {props.placeholder}
            </label>
        </div>
    );
};

export default Input;
