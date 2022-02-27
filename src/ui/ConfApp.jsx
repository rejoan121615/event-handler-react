import React from "react";

const ConfApp = (props) => {
    return (
        <div
            className={` rounded-2xl text-[#657175] ${
                props.actBg ? props.actBg : "bg-[#657175]"
            } p-5 justify-center flex items-center xs:h-28 xl:h-24`}
        >
            {props.active && (
                <img src={props.img} alt={props.alt} className=" w-10" />
            )}
            <h5 className=" capitalize text-[#848d91] text-xl ml-3">
                {props.appName}
            </h5>
        </div>
    );
};

export default ConfApp;
