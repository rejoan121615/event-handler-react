import React from "react";
import HighLightImg from "../../assets/img/eventImg/Highlight.png";
import Btn from "../../ui/Btn";
import AttendeesList from "./AttendeesList";
import EventConferApps from "./EventConferApps";
import Crsimg from "../../assets/img/icons/cross-btn.png";

const GetStartedContentSelectBox = (props) => {
    return (
        <div
            className="
             bg-[#546166] rounded-2xl p-4 relative mx-auto xs:p-6 sm:p-8
             lg:grid lg:grid-cols-2 lg:gap-x-8 xl:p-10 xl:rounded-[32px] xl:grid-cols-lg-1/1.2 2xl:gap-x-12 2xl:p-12
        "
        >
            {/* img && content */}
            <div className=" xl:order-3">
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
                      text-xs absolute left-4 bottom-4 sm:text-base sm:left-6 sm:bottom-6
                    "
                    >
                        ask a question{" "}
                    </button>
                </div>
                {/* title  */}
                <div
                    className="
                    flex mt-5 flex-col xs:justify-between xs:items-start xs:flex-row xl:mt-8 xl:items-center
                    "
                >
                    {/* date and time  */}
                    <div className="">
                        {/* top line  */}
                        <div className=" flex">
                            <h3 className=" display-2 capitalize leading-[100%] xl:text-[35px]">
                                thursday
                            </h3>
                            <div className=" flex items-center ml-4 xl:ml-10">
                                <span className="w-2 h-2 rounded-full bg-[red] block"></span>
                                <span className=" font-medium text-base capitalize ml-2 text-white">
                                    live
                                </span>
                            </div>
                        </div>
                        {/* bottom line  */}
                        <div className="mt-3 xl:flex">
                            <p className=" text-white text-base capitalize">
                                Jan 7th, 2022
                            </p>
                            <p className=" text-slate-300 text-base xl:ml-5">
                                Friday, 10:00pm WAT
                            </p>
                        </div>
                    </div>
                    {/* btn  */}
                    <button
                        onClick={props.joinTrg}
                        className=" 
                        text-black mt-4 px-4 py-2 rounded-full text-sm bg-primary font-bold capitalize
                        xs:inline-block xs:px-7 xs:py-3 xl:mt-0
                    "
                    >
                        join now
                    </button>
                </div>
            </div>
            {/* text content  */}
            <div className=" xl:order-2">
                {/* top text  */}
                <div className="">
                    <div className=" mt-6 lg:mt-0">
                        <h1 className="display-2 leading-[115%] lg:text-3xl xl:text-[38px] 2xl:text-[42px] xl:leading-[120%]">
                            Getting Started with Figma; A Designer’s First Steps
                        </h1>
                    </div>
                    {/* para  */}
                    <div className=" mt-4">
                        <p className="text-sm text-[#CCCCCC] sm:text-base 2xl:text-[18px]">
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do not know to frame them, or the answers
                            are not framed well.
                        </p>
                        <p className="text-sm text-[#CCCCCC] mt-2 sm:text-base 2xl:text-[18px]">
                            Either that they cannot ask them or they do not know
                            to frame them, or the answers are not framed well.
                        </p>
                    </div>
                </div>
                {/* bottom text  */}
                <div className=" mt-8 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:mt-2 lg:grid-cols-1 xl:mt-6 xl:grid-cols-lg-1/0.8 2xl:mt-12">
                    {/* attendence  */}
                    <AttendeesList />
                    <EventConferApps />
                </div>
            </div>
        </div>
    );
};

export default GetStartedContentSelectBox;
