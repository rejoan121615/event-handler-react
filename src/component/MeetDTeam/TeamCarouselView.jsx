import React, { useContext } from "react";
import randomColor from "randomcolor";
import { TeamData } from "../../Context/MeetDExpartData";
import ProfileGenerator from "../../ui/MeetDTean/ProfileGenerator";
// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";

const TeamCarouselView = () => {
    const team = useContext(TeamData);

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            pagination={{ clickable: true }}
        >
            {team.team.map((slide, index) => {
                let bgColor = randomColor({
                    luminosity: "dark",
                    alpha: 100,
                });
                return (
                    <SwiperSlide className=" cursor-pointer" key={index + "i"}>
                        <div
                            className=" p-[35px] rounded-[48px]"
                            style={{ backgroundColor: bgColor }}
                        >
                            <div className=" w-32 h-32 rounded-full">
                                <img src={slide.img} alt="avatar img" />
                            </div>
                            <h2 className=" text-white font-medium capitalize text-[32px] leading-[35px] w-7/12 mt-3">
                                {slide.title}
                            </h2>
                            <p className=" text-white w-8/12 mt-4 text-base">{`Hi, I am ${slide.name}, a ${slide.title} based in ${slide.location} .`}</p>
                            <ProfileGenerator profiles={slide.profiles} />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default TeamCarouselView;
