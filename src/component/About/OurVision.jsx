import React from "react";
import useAboutPageCard from "../../HOC/useAboutPageCard";

const OurVision = () => {
    return (
        <div className=" bg-[#556166] p-6 rounded-2xl lg:p-8 2xl:p-10">
            <h3 className=" capitalize text-white text-2xl font-bold xl:text-3xl">
                our vision
            </h3>
            {/* list paragraph  */}
            <ul className="mt-4 list-disc text-white ml-5 sm:mt-5 2xl:mt-8">
                <li className=" mt-3">
                    <p className=" ">
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to frame them, or the answers are not
                        framed in a way that cannot understand. Whether it’s
                        creating AutoLayout in
                    </p>
                </li>
                <li className=" mt-3">
                    <p>
                        <span className=" text-third font-medium">
                            {" "}
                            Our mission
                        </span>{" "}
                        is to help people get answers to questions threy’ve not
                        found. Either that they cannot ask them or they do not
                        know to frame them, or the answers are not framed in a
                        way that cannot understand. Whether it’s creating
                        AutoLayout in
                    </p>
                </li>
                <li className=" mt-3">
                    <p>
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to frame them, or the answers are not
                        framed in a way that cannot understand. Whether it’s
                        creating AutoLayout in{" "}
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default useAboutPageCard(OurVision);
