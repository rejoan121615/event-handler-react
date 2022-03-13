import React from "react";
import useAboutPageCard from "../../HOC/useAboutPageCard";

const OurValue = () => {
    const data = [
        {
            title: "humanity",
            text: "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in",
        },
        {
            title: "humanity",
            text: "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in",
        },
        {
            title: "humanity",
            text: "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in",
        },
        {
            title: "humanity",
            text: "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in",
        },
    ];
    return (
        <div className=" grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:gap-5">
            {data.map((item, index) => {
                return (
                    <div key={index} className=" bg-[#556166] p-6 rounded-2xl lg:p-8 2xl:p-10">
                        {/* humanity  */}
                        <h3 className="capitalize text-white text-2xl font-bold xl:text-3xl">
                            {item.title}
                        </h3>
                        {/* list paragraph  */}
                        <p className="mt-4 list-disc text-white sm:mt-5">
                            {item.text}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default useAboutPageCard(OurValue);
