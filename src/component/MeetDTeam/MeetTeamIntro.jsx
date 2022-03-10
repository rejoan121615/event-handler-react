import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamCard from "../../ui/MeetDTean/TeamCard";

const MeetTeamIntro = (props) => {
    return (
        <section>
            <div className="container">
                {/* top wrapper  */}
                <div className="flex flex-row justify-between">
                    <h1 className=" display-1 text-third">Meet 'd' Experts</h1>
                    <div className="">
                        <button className=" px-3 py-2 rounded-lg bg-third-400">
                            <FontAwesomeIcon
                                icon={"border-all"}
                                size="lg"
                                className=" text-third"
                            />
                        </button>
                        <button className=" px-3 py-2 rounded-lg">
                            <FontAwesomeIcon
                                icon={"ellipsis"}
                                size="lg"
                                className=" text-third"
                            />
                        </button>
                    </div>
                </div>
                {/* cards container  */}
                <div className="grid mt-10 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-10 2xl:grid-cols-4 2xl:gap-y-5 2xl:gap-x-4 mxl:gap-y-12 mxl:gap-x-16">
                    {props.team.map((team, index) => {
                        return <TeamCard {...team} key={index + "i"} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default MeetTeamIntro;
