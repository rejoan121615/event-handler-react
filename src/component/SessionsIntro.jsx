import React, { useState } from "react";
import EventCard from "../ui/EventCard";
import GithubIcon from "../assets/img/icons/github.png";
import DiamongIcon from "../assets/img/icons/diamond.png";
import JavascriptIcon from "../assets/img/icons/javascript.png";

const SessionsIntro = () => {
    const [topic, setTopic] = useState([
        {
            img: GithubIcon,
            topic: "Github",
            alt: "Github Icon",
        },
        {
            img: DiamongIcon,
            topic: "Ux Design",
            alt: "Diamong icon",
        },
        {
            img: JavascriptIcon,
            topic: "Javascript",
            alt: "Javascript Icon",
        },
    ]);

    return (
        <div className="w-full mt-24 mb-12 sm:w-[470px] md:w-[530px] xl:w-[605px] xl:my-0">
            <h1 className="display-1">Sessions</h1>
            {/* search bar  */}
            <input
                type="text"
                placeholder="Search for event..."
                className="
                px-4 py-3 text-sm rounded-full bg-[#556166] text-white font-medium w-full
                sm:px-6 sm:py-3 sm:mt-3 md:px-8 lg:py-4
              "
            />
            {/* texts  */}
            <div className="">
                <h3 className="display-3 mt-4 text-[#b2b2b2]">
                    Here are some tailored events we made,{" "}
                    <span className="text-white">just for you</span>
                </h3>
            </div>
            {/* card wrapper  */}
            <div className=" overflow-x-scroll mt-10 sm:overflow-x-hidden sm:w-full">
                <div className="flex flex-row justify-between flex-nowrap w-[430px] sm:w-full">
                    {topic.map((item, index) => {
                        return (
                            <EventCard
                                icon={item.img}
                                topicTxt={item.topic}
                                altTxt={item.alt}
                                key={index + "i"}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SessionsIntro;
