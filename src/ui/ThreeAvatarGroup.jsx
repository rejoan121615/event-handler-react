import React from "react";
import Andikan from "../assets/img/faq/Andikan.png";
import Elvis from "../assets/img/faq/Elvis.png";
import Kemi from "../assets/img/faq/Kemi.png";
import PeaceSign from "../assets/img/faq/peace-sign.png";
import AvatarQuote from "../ui/AvatarQuote";

const ThreeAvatarGroup = () => {
    return (
        <div className=" flex flex-col gap-y-8 sm:mt-0 sm:gap-0">
            {/* oh yeah avatar */}
            <div className=" relative">
                <img
                    className=" w-44 h-44 sm:w-36 sm:h-36"
                    src={Andikan}
                    alt="elvis avatar"
                />
                <AvatarQuote className=" absolute left-0 -top-[80px] sm:-top-[100px] lg:top-0 xs:left-16">
                    Oh, yeah, you can go on with your life. Sorry if we took
                    your time.
                </AvatarQuote>
            </div>
            {/* hi avatar */}
            <div className=" relative">
                <img
                    className=" w-48 h-48 ml-auto sm:w-40 sm:h-40"
                    src={Kemi}
                    alt="kemi avatar"
                />
                <img
                    className=" absolute w-16 h-16 right-0 -top-8"
                    src={PeaceSign}
                    alt="peace sign"
                />
            </div>
            {/* helper over here  */}
            <div className=" relative">
                <AvatarQuote className=" absolute left-12 -top-14 sm:left-0">
                    Helper over here
                </AvatarQuote>
                <img
                    className=" w-40 h-40 sm:w-28 sm:h-28"
                    src={Elvis}
                    alt="elvis avatar"
                />
            </div>
        </div>
    );
};

export default ThreeAvatarGroup;
