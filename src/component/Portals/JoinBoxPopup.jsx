import React from "react";
import ZoomImg from "../../assets/img/icons/zoom.png";
import LeftArrow from "../../assets/img/icons/left-arrow.png";

const JoinBoxPopup = () => {
    return (
      <div className=" bg-[#546166] relative mx-auto rounded-3xl px-4 pt-10 pb-6
         sm:px-8 sm:py-8 sm:max-w-[750px]">
            {/* back button  */}
        <button className="
             absolute right-5 top-5 bg-sky-600 w-10 h-10 flex items-center justify-center text-white font-medium rounded-xl
            cursor-pointer sm:right-7 sm:top-7
          ">
                <img src={LeftArrow} alt="left arrow icon" className=" w-2" />
            </button>
            {/* top  */}
            <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap">
                <img src={ZoomImg} alt="zoom img links" className=" w-20" />
                {/* texts  */}
                <div className=" sm:w-9/12 sm:ml-8">
                    <h3 className=" text-primary capitalize font-medium text-xl mt-4 sm:mt-0">
                        Getting Started with Figma; A Designer’s First Steps
                    </h3>
                    <p className=" text-[#CCCCCC] text-md mt-3">
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to found. Either that they cannot ask
                        them or they do not know to
                    </p>
                </div>
                <div className=" mt-4">
                    <h6 className=" text-primary font-medium text-[18px]">
                        Here's the link to your meeting
                    </h6>
                    <p className=" text-[#CCCCCC] text-md">
                        Copy this link and send it to the people you want to
                        join you on this session.
                    </p>
                </div>
                <input
                    type="text"
                    value="something"
            className="
            px-4 py-3 bg-[#657175] text-white text-lg font-medium mt-4 rounded-xl capitalize w-full
            sm:px-5 sm:py-4 sm:mt-6        "
                />
            </div>
        </div>
    );
};

export default JoinBoxPopup;
