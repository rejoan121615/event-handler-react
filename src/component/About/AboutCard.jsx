import React from "react";
import useAboutPageCard from "../../HOC/useAboutPageCard";
// assets
import One from "../../assets/img/about/one.jpg";
import Two from "../../assets/img/about/two.jpg";
import Three from "../../assets/img/about/three.jpg";
import Four from "../../assets/img/about/four.jpg";
import Five from "../../assets/img/about/five.jpg";
import Six from "../../assets/img/about/six.jpg";

const AboutCard = (props) => {
    const ImgList = [One, Two, Three, Four, Five, Six];

    return (
        <React.Fragment>
            <div
                className=" 
                                    bg-[#556166] rounded-[30px] p-8 grid grid-cols-2 grid-rows-3 gap-4 justify-items-center max-w-[350px] mx-auto
                                      xs:grid-cols-3 xs:grid-rows-2 xs:max-w-[440px] xs:p-5
                                      sm:grid-cols-2 sm:grid-rows-3 sm:max-w-[300px] sm:gap-y-6
                                      lg:grid-cols-3 lg:grid-rows-2 lg:max-w-[600px] lg:p-8 lg:gap-y-8
                                    "
            >
                {ImgList.map((item, index) => {
                    return (
                        <img
                            key={index + "i"}
                            src={item}
                            alt="avatar"
                            className=" w-24 h-24 rounded-full bg-[#4c575c] lg:w-32 lg:h-32"
                        />
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default useAboutPageCard(AboutCard);
