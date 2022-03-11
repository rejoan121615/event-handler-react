import React from "react";

const Tag = (props) => {
    return (
        <h6
            className={`p-2 text-sm text-center bg-[#5b6673] text-[#AEAFFF] font-medium rounded-full mt-5 ml-2 first:ml-0
           xs:px-3 sm:text-base sm:px-4 ${props.className}`}
            style={props.style}
        >
            {props.tag ? `#${props.tag}` : props.txt}
        </h6>
    );
};

export default Tag;
