import React from "react";

const CountDown = (props) => {
    return (
        <div className={`rounded-[24px] bg-[#556166] p-5 flex justify-between ${props.className}`}>
            <div className="w-22 bg-[#667175] rounded-[15px] px-3 py-2">
                <p className="text-white font-medium text-[20px] capitalize">
                    days
                </p>
                <h1 className=" text-white display-1">04</h1>
            </div>
            <div className="w-22 bg-[#667175] rounded-[15px] px-3 py-2">
                <p className="text-white font-medium text-[20px] capitalize">
                    days
                </p>
                <h1 className=" text-white display-1">04</h1>
            </div>
            <div className="w-22 bg-[#667175] rounded-[15px] px-3 py-2">
                <p className="text-white font-medium text-[20px] capitalize">
                    days
                </p>
                <h1 className=" text-white display-1">04</h1>
            </div>
        </div>
    );
};

export default CountDown;
