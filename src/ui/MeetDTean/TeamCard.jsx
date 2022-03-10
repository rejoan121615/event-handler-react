import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamCard = (props) => {
    const [profile, setProfile] = useState(props.profiles);

    const genPro = (type) => {
        switch (type) {
            case "github":
                return <FontAwesomeIcon icon={["fab", "github"]} />;
            case "js":
                return <FontAwesomeIcon icon={["fab", "js"]} />;
            case "dribble":
                return <FontAwesomeIcon icon={["fab", "dribbble"]} />;
            default:
                return <FontAwesomeIcon icon={"gem"} />;
        }
    };

    const proList = profile.map((item, index) => {
        return (
            <a
                href={item.link}
                className=" text-white w-8 h-8 text-[18px] bg-[#646e73] flex justify-center items-center rounded-full"
                key={index}
            >
                {genPro(item.type)}
            </a>
        );
    });

    return (
        <div className=" flex gap-x-6">
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
                <div className=" mt-4 flex gap-x-3">{proList}</div>
            </div>
        </div>
    );
};

export default TeamCard;
