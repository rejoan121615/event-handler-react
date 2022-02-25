import React from "react";
import Tag from "./Tag";

const TitleCard = (props) => {
    return (
        <div className="p-4 rounded-[24px] bg-[#556166] flex flex-col items-start sm:p-6 lg:col-start-2 lg:row-start-2">
            <h5 className="text-[#cccccc] text-md capitalize font-medium 2xl:text-[18px]">
                title:
            </h5>
            <h4 className="text-white font-medium text-xl xl:text-[22px] sm:text-[25px] mxl:text-[25px] mxl:leading-[32px] mxl:mt-3">
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
