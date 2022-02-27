import React, { useState } from "react";
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

    const showGetStartedHandler = () => {
        setShowGetStarted(!showGetStarted);
    };

    const showHideHandler = () => {
        setSessionEventToggle(!sessionEventToggle);
    };

    return (
        <section>
            {/* intro container  */}
            <div className="container py-12 md:py-24 relative">
                {!sessionEventToggle && <SessionsIntro />}
                <div className="relative">
                    {/* button  */}
                    <button
                        onClick={showHideHandler}
                        className="w-12 h-10 pointer block mx-auto"
                    >
                        <img src={DownArrow} alt="" />
                    </button>
                    {/* event content          */}
                    {sessionEventToggle && (
                        <div
                            className="
                        left grid grid-cols-1 gap-y-6 mt-12 relative lg:grid-cols-2 lg:gap-x-6 2xl:grid-cols-3
                        2xl:gap-x-10
                        
                      "
                        >
                            <HighlightCard
                                joinHandler={showGetStartedHandler}
                            />
                            <CountDown />
                            <TitleCard />
                            <UpcomingEvents />
                        </div>
                    )}
                </div>
            </div>
            {/* get started portals  */}
            {showGetStarted && <GetStartedPortal closeHandler={showGetStartedHandler} />}
        </section>
    );
};

export default MainPageIntro;
