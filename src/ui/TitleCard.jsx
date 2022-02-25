import React from "react";
import Tag from "./Tag";

const TitleCard = (props) => {
    return (
        <div
            className={`p-4 rounded-[24px] bg-[#556166] flex flex-col items-start sm:p-6 ${props.className}`}
        >
            <h5 className="text-[#cccccc] text-md capitalize font-medium">
                title:
            </h5>
            <h4 className="text-white font-medium text-xl xl:text-[22px] sm:text-[25px]">
                Getting started with Figma; A designer’s First steps
            </h4>
            {/* tag wrapper  */}
            <div className="flex ">
                <Tag tag="Title" />
                <Tag tag="Title" />
                <Tag tag="Title" />
                <Tag tag="Title" />
            </div>
        </div>
    );
};

export default TitleCard;
