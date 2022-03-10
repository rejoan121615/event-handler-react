import React, { useContext } from "react";
import TeamCard from "../../ui/MeetDTean/TeamCard";
import { TeamData } from "../../Context/MeetDExpartData";

const TeamGridView = () => {
    const team = useContext(TeamData);

    // console.log(team);

    return (
        <section>
            <div className="container">
                <div className="grid mt-10 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-10 2xl:grid-cols-4 2xl:gap-y-5 2xl:gap-x-4 mxl:gap-y-12 mxl:gap-x-16">
                    {team.team.map((team, index) => {
                        return <TeamCard {...team} key={index + "i"} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamGridView;
