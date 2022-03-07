import React, { useState } from "react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";     
import Incognito from '../assets/img/icons/form/incognito.png'

const Input = (props) => {
    const [inputVal, setInputVal] = useState("");

    const changeHandler = (event) => {
        setInputVal(event.target.value);
    };

    let input;
    switch (props.type) {
        case "select":
            input = (
                <select
                    name=""
                    id=""
                    defaultValue="optional"
                    onChange={changeHandler}
                    className=" bg-transparent text-[#E6E6E6] focus:outline-none pl-2 text-sm w-[85%] overflow-hidden sm:w-[90%] sm:text-base
                      "
                >
                    <option
                        className=" capitalize font-medium bg-[#556166]"
                        value="optional"
                        disabled
                        hidden
                    >
                        What Category does your query fall under?
                    </option>
                    <option
                        className="  font-medium capitalize bg-[#556166]"
                        value="one"
                    >
                        item one
                    </option>
                    <option
                        className="  font-medium capitalize bg-[#556166]"
                        value="two"
                    >
                        item two
                    </option>
                    <option
                        className="  font-medium capitalize bg-[#556166]"
                        value="three"
                    >
                        item three
                    </option>
                    <option
                        className="  font-medium capitalize bg-[#556166]"
                        value="four"
                    >
                        item four
                    </option>
                    <option
                        className="  font-medium capitalize bg-[#556166]"
                        value="five"
                    >
                        item five
                    </option>
                </select>
            );
            break;
        default:
            input = (
                <input
                    type={props.type}
                    value={inputVal}
                    onChange={changeHandler}
                    placeholder={props.placeholder}
                    className=" bg-transparent rounded-full focus:outline-none pl-2 text-[#E6E6E6] text-sm sm:text-base w-[85%]"
                />
            );
            break;
    }
    return (
        <div className=" bg-[#556166] rounded-full p-2 flex items-center md:p-3">
            <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-[#667175] md:w-10 md:h-10">
                <img
                    src={props.icon}
                    alt="catagory"
                    className={`w-7/12 md:w-5/12 ${props.imgCls}`}
                />
            </div>
        {input}
          <img src={Incognito} alt="incognito icon" className=" w-5 mr-2" />
        </div>
    );
};

export default Input;
