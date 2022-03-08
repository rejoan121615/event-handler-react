import React from "react";
import usePortal from "../../HOC/usePortal";
import User from "../../ui/User";
import CrossBtn from "../../ui/CrossBtn";
import QusAns from "../../ui/Directory/QusAns";
import { QusAnsConsumer } from '../../Context/DirQusAnsPortals'

let className =
    " w-11/12 max-w-[800px] sm:p-6 sm:pt-8 xl:max-w-[920px] xl:p-10 xl:pt-[12]";

const QusAnsPortal = (props) => {
    return (
        <div className=" w-full ">
            {/* top side  */}
            <div className="flex justify-between items-center">
                {/* left side  */}
                <div className=" flex flex-col sm:flex-row sm:items-center">
                    <h1 className=" display-1 leading-10 sm:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] text-sec capitalize">
                        questions
                    </h1>
                    <h6 className=" font-bold text-[#B2B2B2] text-xl sm:ml-4 lg:text-[20px] 2xl:text-[24px]">
                        . 456 answered
                    </h6>
                </div>
                {/* right side btn  */}
                {/* <CrossBtn /> */}
                <QusAnsConsumer>
                    {(value) => {
                        return (
                            <CrossBtn click={value.open} />
                        )
                    }}
                </QusAnsConsumer>
            </div>
            {/* user wrapper  */}
            <div className=" mt-4 lg:mt-6 flex flex-col gap-y-4 max-h-[65vh] overflow-y-scroll">
                {["", "", "", "", "", "", "", ""].map((item, index) => {
                    return <QusAns key={index + 'i'} />;
                })}
            </div>
        </div>
    );
};

export default usePortal(QusAnsPortal, className);
