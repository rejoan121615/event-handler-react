import React from "react";
import { NavLink } from "react-router-dom";

const bottomNavigation = (props) => {
    return (
        <footer className="hidden md:block">
            <div className="container pt-0">
                <div className="w-full flex justify-between xl:w-10/12 xl:mx-auto 2xl:w-8/12 mxl:w-7/12">
                    {/* links  */}
                    <NavLink
                        to="/sessions"
                        className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10"
                    >
                        sessions
                    </NavLink>
                    <NavLink
                        to="/directory"
                        className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10"
                    >
                        directory
                    </NavLink>
                    <NavLink
                        to="/submit-a-question"
                        className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10"
                    >
                        submit a question
                    </NavLink>
                    <NavLink
                        to="/meet-d-team"
                        className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10"
                    >
                        meet d team
                    </NavLink>
                    <NavLink
                        to="/archives"
                        className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10"
                    >
                        archives
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};

export default bottomNavigation;
