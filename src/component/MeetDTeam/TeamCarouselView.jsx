import React, { useContext } from "react";
import { TeamData } from "../../Context/MeetDExpartData";

// swiper slider
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";

const TeamCarouselView = () => {
    const team = useContext(TeamData);
    console.log(team);

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default TeamCarouselView;
