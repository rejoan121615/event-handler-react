import React from "react";
import HighLightImg from "../../assets/img/eventImg/Highlight.png";
import Btn from "../../ui/Btn";
import AttendeesList from "./AttendeesList";
import EventConferApps from "./EventConferApps";
import Crsimg from '../../assets/img/icons/cross-btn.png';

const StartedCard = () => {
    return (
        <div className=" bg-[#546166] w-[90%] rounded-2xl p-4 relative mx-auto mt-24 mb-16">
            <button className=" -top-16 right-0 absolute w-10 h-10 bg-[#2b2f31] p-3 rounded-lg">
                <img src={Crsimg} alt="cross btn" />
            </button>
            {/* img && content */}
            <div>
                {/* img wrapper  */}
                <div className=" relative">
                    <img
                        src={HighLightImg}
                        alt="highlight images"
                        className=" w-full"
                    />
                    <button
                        className=" 
                      px-3 py-2 font-bold uppercase rounded-lg bg-[##ffffff2e] text-white border
                      text-xs absolute left-4 bottom-4
                    "
                    >
                        ask a question{" "}
                    </button>
                </div>
                {/* title  */}
                <div
                    className="
                    flex mt-5 flex-col xs:justify-between xs:items-start xs:flex-row
                    "
                >
                    {/* date and time  */}
                    <div className="">
                        {/* top line  */}
                        <div className=" flex">
                            <h3 className=" display-2 capitalize leading-[100%]">
                                thursday
                            </h3>
                            <div className=" flex items-center ml-4">
                                <span className="w-2 h-2 rounded-full bg-[red] block"></span>
                                <span className=" font-medium text-base capitalize ml-2 text-white">
                                    live
                                </span>
                            </div>
                        </div>
                        {/* bottom line  */}
                        <div className="mt-3">
                            <p className=" text-white text-base capitalize">
                                Jan 7th, 2022
                            </p>
                            <p className=" text-slate-300 text-base">
                                Friday, 10:00pm WAT
                            </p>
                        </div>
                    </div>
                    {/* btn  */}
                    <button
                        className=" 
                        text-black mt-4 px-4 py-2 rounded-full text-sm bg-primary font-bold capitalize
                        xs:inline-block xs:px-7 xs:py-3
                    "
                    >
                        join now
                    </button>
                </div>
            </div>
            {/* text content  */}
            <div>
                {/* top text  */}
                <div className="">
                    <div className=" mt-6">
                        <h1 className="display-2 leading-[115%]">
                            Getting Started with Figma; A Designer’s First Steps
                        </h1>
                    </div>
                    {/* para  */}
                    <div className=" mt-4">
                        <p className="text-sm text-[#CCCCCC]">
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do not know to frame them, or the answers
                            are not framed well.
                        </p>
                        <p className="text-sm text-[#CCCCCC] mt-2">
                            Either that they cannot ask them or they do not know
                            to frame them, or the answers are not framed well.
                        </p>
                    </div>
                </div>
                {/* bottom text  */}
                <div className=" mt-8">
                    {/* attendence  */}
                    <AttendeesList />
                    <EventConferApps />
                </div>
            </div>
        </div>
    );
};

export default StartedCard;
