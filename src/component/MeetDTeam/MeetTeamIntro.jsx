import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamGridView from "./TeamGridView";
import TeamCarouselView from "./TeamCarouselView";

const MeetTeamIntro = (props) => {
    const [showGrid, setShowGrid] = useState(true);

    const gridHandler = () => {
        return setShowGrid(!showGrid);
    };

    return (
        <section>
            <div className="container">
                {/* top wrapper  */}
                <div className="flex flex-row justify-between">
                    <h1 className=" display-1 text-third">Meet 'd' Experts</h1>
                    <div className="">
                        <button
                            onClick={gridHandler}
                            className={` px-3 py-2 rounded-lg ${
                                !showGrid && "bg-third-400"
                            } `}
                        >
                            <FontAwesomeIcon
                                icon={"border-all"}
                                size="lg"
                                className=" text-third"
                            />
                        </button>
                        <button
                            onClick={gridHandler}
                            className={` px-3 py-2 rounded-lg ${
                                showGrid && "bg-third-400"
                            } `}
                        >
                            <FontAwesomeIcon
                                icon={"ellipsis"}
                                size="lg"
                                className=" text-third"
                            />
                        </button>
                    </div>
                </div>
                {/* cards container  */}
            </div>
            {showGrid ? <TeamCarouselView /> : <TeamGridView />}
        </section>
    );
};

export default MeetTeamIntro;
