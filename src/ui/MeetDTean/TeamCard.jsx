import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileGenerator from "./ProfileGenerator";

const TeamCard = (props) => {
    

    return (
        <div className=" flex gap-x-6 lg:flex-col xl:flex-row">
            {/* left image  */}
            <div className="">
                <img src={props.img} alt="" />
            </div>
            {/* right img  */}
            <div className="">
                <h3 className=" text-third font-medium text-2xl capitalize">
                    {props.name}
                </h3>
                <h3 className=" text-white font-medium text-[25px] capitalize">
                    {props.title}
                </h3>
                <p className=" mt-4 text-white">{props.about}</p>
                {/* bottom links  */}
                <ProfileGenerator {...props} />
            </div>
        </div>
    );
};

export default TeamCard;
