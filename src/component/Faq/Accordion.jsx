import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = (props) => {
    const [active, setActive] = useState(false);

    const accordionHandler = () => {
        setActive(!active);
    };

    return (
        <div
            className={`px-[32px]  rounded-[25px] ${
                active ? "bg-[#556166] py-[28px]" : " py-[0px]"
            }`}
        >
            {/* top accordion switch  */}
            <div
                onClick={accordionHandler}
                className=" flex items-center justify-between cursor-pointer"
            >
                <h6
                    className={`text-white font-medium ${
                        active ? "text-3xl" : "text-xl"
                    }`}
                >
                    {props.title}
                </h6>
                <FontAwesomeIcon
                    icon="fa-solid fa-angle-down"
                    className={` text-white ${active && "rotate-180"}`}
                />
            </div>
            {/* accordion body  */}
            {active && (
                <div>
                    <p className=" text-[#CCCCCC] mt-4">{props.content}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
