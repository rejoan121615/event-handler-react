import React, { useState } from "react";
import moment from "moment";
import { Link, useRouteMatch } from "react-router-dom";

const Calender = () => {
    const [monthList, setMonthList] = useState(moment.monthsShort());
    const { path, url } = useRouteMatch();

    return (
        <section>
            <div className="container">
                {/* month wrapper  */}
                <div className=" grid grid-cols-4 grid-rows-3 gap-10 max-w-[1000px] mx-auto">
                    {monthList.map((month, index) => {
                        return (
                            <Link key={index + "i"} to={`/archives/week`}>
                                <div
                                    className=" w-32 h-32 rounded-full bg-[#556166] hover:bg-[#555553] text-[#ff8944]
                                font-bold text-3xl flex justify-center items-center uppercase justify-items-center cursor-pointer transition-all
                                "
                                >
                                    {month}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Calender;
