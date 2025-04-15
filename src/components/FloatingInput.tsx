const FloatingInput = (props: any) => {
    return (
        <div className="relative mb-6">
            {props.id !== "message" ? (
                <input
                    type="text"
                    id={props.id}
                    value={props.value}
                    onChange={(e) => props.handleChange(props.id, e.target.value)}
                    onBlur={(e) =>
                        props.handleBlur && props.handleBlur(props.id, e.target.value)
                    }
                    className={`peer block px-2.5 pb-2.5 pt-4 w-full text-xl rounded-xl text-left align-middle text-white bg-transparent border appearance-none 
                        hover:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 
                        ${props.error ? "border-red-500 focus:border-red-500" : "border-textColor focus:border-primaryColor"}`}
                    placeholder=" "
                />
            ) : (
                <textarea
                    id={props.id}
                    value={props.value}
                    onChange={(e) => props.handleChange(props.id, e.target.value)}
                    onBlur={(e) =>
                        props.handleBlur && props.handleBlur(props.id, e.target.value)
                    }
                    placeholder=" "
                    rows={4}
                    className={`peer block px-2.5 pb-2.5 pt-4 w-full text-xl rounded-xl text-white bg-transparent border appearance-none 
                        hover:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 
                        ${props.error ? "border-red-500 focus:border-red-500" : "border-textColor focus:border-primaryColor"}`}
                />
            )}

            <label
                htmlFor={props.id}
                className={`absolute text-xl text-textColor dark:text-gray-400 duration-300 transform scale-100 -translate-y-4 top-1 z-10 origin-[0] bg-bgColor px-2 
                    peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:-translate-y-1/2 
                    ${props.id !== "message" ? "peer-placeholder-shown:top-1/2" : "peer-placeholder-shown:top-6"} 
                    peer-focus:top-1 
                    peer-focus:scale-90 
                    peer-focus:-translate-y-4 
                    peer-focus:text-[#64ffda] 
                    peer-not-placeholder-shown:text-[#64ffda] 
                    rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
                {props.name}
            </label>

            {props.error && (
                <div className="text-red-500 text-sm mt-1 pl-1">{props.error}</div>
            )}
        </div>
    );
};

export default FloatingInput;
