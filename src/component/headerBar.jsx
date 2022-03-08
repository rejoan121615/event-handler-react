import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const HeaderBar = (props) => {
    // nav state
    const [navShow, setNavShow] = useState(false);
    // nav click handler
    const navClickHandler = () => {
        return setNavShow(!navShow);
    };

    return (
        <header>
            <div className="container mx-auto flex flex-wrap justify-between sm:items-center">
                {/* logo  */}
                <Link
                    to="/"
                    id="logo"
                    className="text-center text-black order-1"
                >
                    <h1 className="font-black uppercase font-sans text-2xl">
                        <span className="text-orange-600">md</span>
                        <span className="text-black">.</span>
                        <span className="text-red-500">rej</span>
                    </h1>
                </Link>
                {/* page links  */}

                <div
                    className={`${
                        navShow ? "flex" : "hidden"
                    } flex-col justify-between w-full order-3 bg-stone-500 mt-4 rounded-lg py-4
                    sm:flex sm:flex-row sm:w-9/12 sm:bg-transparent sm:mt-0 sm:justify-end`}
                >
                    <NavLink
                        to="/about"
                        className="text-white text-sm font-medium px-8 flex items-center rounded-md xl:px-10 mxl:px-12 mb-2 sm:mb-0 transition-all hover:bg-[#AEAFFF]"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/faqs"
                        className="text-white text-sm font-medium px-8 flex items-center rounded-md xl:px-10 mxl:px-12 mb-2 sm:mb-0 transition-all hover:bg-[#AEAFFF]"
                    >
                        FAQs
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className="text-white text-sm font-medium px-8 flex items-center rounded-md xl:px-10 mxl:px-12 transition-all hover:bg-[#AEAFFF]"
                    >
                        Contact Us
                    </NavLink>
                </div>

                {/* resp navbar  */}
                <button
                    onClick={navClickHandler}
                    className=" w-[30px] order-2 sm:hidden"
                >
                    <span className="a w-full h-1 block rounded-sm bg-white mb-[5px]"></span>
                    <span className="a w-full h-1 block rounded-sm bg-white mb-[5px]"></span>
                    <span className="a w-full h-1 block rounded-sm bg-white"></span>
                </button>
            </div>
        </header>
    );
};

export default HeaderBar;
