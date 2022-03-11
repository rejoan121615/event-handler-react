import React, {useState} from "react";
import moment from "moment";

const Calender = () => {
  const [monthList, setMonthList] = useState(moment.monthsShort());

    return (
        <section>
            <div className="container">
                {/* month wrapper  */}
                <div className=" grid grid-cols-4 grid-rows-3 gap-10 max-w-[1000px] mx-auto">
                    {monthList.map((month, index) => {
                        return (
                            <div
                                className=" w-32 h-32 rounded-full bg-[#556166] hover:bg-[#555553] text-[#ff8944]
                                  font-bold text-3xl flex justify-center items-center uppercase justify-items-center cursor-pointer transition-all
                                  "
                                key={index + "i"}
                            >
                                {month}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Calender;
