import React from "react";

const Btn = (props) => {
    const style =
        "bg-[#697478] text-white border-[white] border-[0.3px] px-8 py-3 rounded-full font-bold capitalize lg:px-10 lg:py-4 pointer";
    const activeStyle =
        "bg-[#aeafff] text-[#424f55] border-transparent border-[0.3px] px-8 py-3 rounded-full font-bold capitalize lg:px-10 lg:py-4 pointer";

    return (
        <button
            className={`${(props.active ? activeStyle : style)} ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default Btn;
