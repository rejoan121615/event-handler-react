import React from "react";

const AvatarQuote = (props) => {
    return (
        <>
            <h6
                className={` bg-[#7b8488] text-white font-medium px-3 py-4 text-sm rounded-full rounded-bl-none md:text-base ${props.className}`}
            >
                {props.children}
            </h6>
        </>
    );
};

export default AvatarQuote;
