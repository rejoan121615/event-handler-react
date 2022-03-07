import React, { useState, useRef } from "react";
import SessionsIntro from "./SessionsIntro";
import AllEventsPage from "./AllEventsPage";
import HighlightCard from "../ui/HighlightCard";
import UpcomingEvents from "./UpcomingEvents";
import CountDown from "../ui/CountDown.jsx";
import TitleCard from "../ui/TitleCard";
import DownArrow from "../assets/img/icons/down.png";
import GetStartedPortal from "./Portals/GetStartedPortal";

const MainPageIntro = (props) => {
    const [sessionEventToggle, setSessionEventToggle] = useState(false);
    const [showGetStarted, setShowGetStarted] = useState(false);

    const wrapperRef = useRef()

    const showGetStartedHandler = () => {
        setShowGetStarted(!showGetStarted);
    };

    const translateHandler = () => {
        wrapperRef.current.classList.toggle("sessionTranslate")
    };

    return (
        <section className="">
            {/* intro container  */}
            <div className="container py-12 md:py-24 relative xl:py-12">
                <div ref={wrapperRef} className=" 2xl:flex 2xl:w-[170vw] 2xl:items-center 2xl:transition-all">
                    <SessionsIntro />
                    <div className="relative 2xl:container 2xl:px-0 2xl:flex 2xl:items-center 2xl:px-12">
                        {/* button  */}
                        <button
                            onClick={translateHandler}
                            className="w-12 h-10 pointer block mx-auto 2xl:w-28 2xl:h-28 mxl:-translate-x-5"
                        >
                            <img className=" 2xl:rotate-90 " src={DownArrow} alt="" />
                        </button>
                        {/* event content          */}

                        <div
                            className="
                        left grid grid-cols-1 gap-y-6 mt-12 relative lg:grid-cols-2 lg:gap-x-6 2xl:grid-cols-3
                        2xl:gap-x-10 2xl:mt-0
                        
                      "
                        >
                            <HighlightCard
                                joinHandler={showGetStartedHandler}
                            />
                            <CountDown />
                            <TitleCard />
                            <UpcomingEvents />
                        </div>
                    </div>
                </div>
            </div>
            {/* get started portals  */}
            {showGetStarted && (
                <GetStartedPortal closeHandler={showGetStartedHandler} />
            )}
        </section>
    );
};

export default MainPageIntro;
