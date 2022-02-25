import React from "react";
import EventImg from "../assets/img/eventImg/upcoming2.png";

const UpEventCards = (props) => {
    return (
    <div className="p-4 rounded-[24px] bg-[#556166] flex flex-col items-stretch max-w-[300px] xs:flex-row xs:max-w-full xs:items-center sm:p-5 sm:justify-between sm:items-stretch">
            {/* left  */}
            <div className="order-2 mt-3 xs:mt-0 xs:order-1 xs:w-3/6 sm:flex sm:flex-row sm:flex-wrap sm:items-start sm:content-center sm:justify-between sm:w-[55%] sm:content-between">
                <h4 className="text-[#c5c5c6] font-medium text-xl xl:text-[22px]">
                    Finding your niche as a creative...
                </h4>
                <div className="flex flex-col mt-3">
                    <h6 className="text-white text-md font-medium capitalize">
                        jan 7th, 2022
                    </h6>
                    <h6 className="text-[#CCCCCC] text-sm font-medium">
                        Friday, 10:00pm WAT
                    </h6>
                </div>
                <div
                    className="bg-[#aeafff] text-[#424f55] border-transparent border-[0.3px] px-4 py-1 inline-block rounded-full font-bold uppercase
                  text-sm mt-4 sm:px-5 sm:py-2
                  "
                >
                    rsvp
                </div>
            </div>
            {/* right  */}
            <div className="order-1 xs:w-3/6 sm:w-[40%]">
                <img src={EventImg} alt="" className="w-full" />
            </div>
        </div>
    );
};

export default UpEventCards;
