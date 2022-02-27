import React from "react";
import HighLightImg from "../../assets/img/eventImg/Highlight.png";
import Btn from "../../ui/Btn";
import AttendeesList from "./AttendeesList";
import EventConferApps from "./EventConferApps";
import Crsimg from '../../assets/img/icons/cross-btn.png';
import GetStartedContentSelectBox from "./GetStartedContentSelectBox";
import JoinBoxPopup from "./JoinBoxPopup";


const StartedCard = () => {
    return (
        <div
            className="
             w-[90%] rounded-2xl relative mx-auto mt-24 mb-16 sm:max-w-[600px] lg:container lg:pl-0 lg:pr-0
              lg:grid-cols-2 lg:gap-x-8 xl:max-w-[1300px] xl:rounded-[32px] xl:grid-cols-lg-1/1.2 2xl:gap-x-12 2xl:max-w-[1400px]
        "
        >
            <button className=" -top-16 right-0 absolute w-10 h-10 bg-[#2b2f31] p-3 rounded-lg">
                <img src={Crsimg} alt="cross btn" />
            </button>
            {/* get started content box  */}
            {/* <GetStartedContentSelectBox /> */}
            <JoinBoxPopup />
        </div>
    );
};

export default StartedCard;
