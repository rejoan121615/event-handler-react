import React from "react";
import Titleh1 from "./Titleh1";
import CardImg from "../assets/img/eventImg/Highlight.png";
import Btn from "./Btn";

const HighlightCard = (props) => {
    return (
        <div
            className="
            w-full flex flex-col rounded-[42px] bg-[#556166] p-5 
            xs:p-7 lg:flex-col lg:items-center lg:justify-between lg:col-span-1 xl:items-stretch 
            xl:p-10 2xl:gap-x-10 2xl:col-span-2 2xl:flex-row

            "
        >
            {/* left side text   */}
            <div className="
            order-2 mt-6 lg:w-full lg:order-2 xl:flex xl:flex-col xl:flex-wrap xl:justify-between
            2xl:w-3/6">
                {/* title  */}
                <div className="flex flex-col xs:flex-row xs:justify-between">
                    {/* left  */}
                    <div className="flex flex-col order-2 mt-2 xs:order-1">
                        <Titleh1>Thursday</Titleh1>
                        <div className="flex flex-col xs:flex-row xs:items-center">
                            <h6 className="text-white text-xl font-medium capitalize">
                                jan 7th, 2022
                            </h6>
                            <h6 className="text-[#CCCCCC] text-base font-medium xs:ml-4">
                                Friday, 10:00pm WAT
                            </h6>
                        </div>
                    </div>
                    {/* right live  */}
                    <div className="flex items-center order-1">
                        <span className="block w-2 h-2 rounded-full bg-[red]"></span>
                        <p className="ml-2 font-medium text-lg text-white">
                            Live
                        </p>
                    </div>
                </div>

                {/* visitors  */}
                <div className="mt-5 flex flex-col ">
                    {/* paragraph texts  */}
                    <p className="para text-white font-sans text-sm leading-[170%]">
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to frame them, or the answers are not
                        framed well
                    </p>
                    {/* thubnail  */}
                    <div className="flex items-center">
                        <div className="flex mt-3">
                            <span className="w-10 h-10 rounded-full bg-red-800"></span>
                            <span className="w-10 h-10 rounded-full bg-orange-500 -ml-3"></span>
                            <span className="w-10 h-10 rounded-full bg-stone-900 -ml-3"></span>
                            <span className="w-10 h-10 rounded-full bg-green-700 -ml-3"></span>
                        </div>
                        <p className="text-white font-medium ml-5">
                            500+ going
                        </p>
                    </div>
                </div>
                {/* buttons  */}
                <div className="flex flex-col mt-8 xs:flex-row lg:mt-6">
                    <Btn active="true">join now</Btn>
                    <Btn className="mt-4 xs:mt-0 xs:ml-5">view events</Btn>
                </div>
            </div>
            {/* right side img  */}
            <div className="order-1 lg:w-full lg:order-1 2xl:w-3/6 2xl:order-2">
                <img src={CardImg} className="w-full 2xl:h-full" alt="" />
            </div>
        </div>
    );
};

export default HighlightCard;
