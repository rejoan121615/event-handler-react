import React from "react";

const TopicTitle = (props) => {
    return (
        <h6
            className=" 
            p-2 text-sm text-center bg-[#5b6673] text-[#AEAFFF] font-medium rounded-full mt-5
            "
        >
            {`# ${props.topicTxt}`}
        </h6>
    );
};

export default TopicTitle;
