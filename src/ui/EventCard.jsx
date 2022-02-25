import React from "react";

const EventCard = (props) => {
    return (
      <div className="
        bg-[#525e63] p-4 flex flex-col justify-between items-center rounded-[32px] w-32
        sm:w-36
        xl:w-[144px]
        ">
            <div
                className="
             p-4 rounded-full w-[70px] h-[70px] bg-[#717a7e] flex items-center justify-center
             sm:w-[100px] sm:h-[100px]
             "
            >
                <img src={props.icon} alt={props.altTxt} />
            </div>
        <h6 className=" 
            p-2 text-sm text-center bg-[#5b6673] text-[#AEAFFF] font-medium rounded-full mt-5
            ">
                {`# ${props.topicTxt}`}
            </h6>
        </div>
    );
};

export default EventCard;
