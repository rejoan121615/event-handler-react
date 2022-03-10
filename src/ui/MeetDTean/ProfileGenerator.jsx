import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProfileGenerator = (props) => {
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
        <div className={` mt-4 flex gap-x-3 ${props.className}`}>{proList}</div>
    );
};

export default ProfileGenerator;
