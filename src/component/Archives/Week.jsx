import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const Week = (props) => {
    console.log(props.weekData);
    return (
        <section>
            {/* heading  */}
            <div className="container">
                <Link
                    to="/archives"
                    className=" text-white capitalize text-xl font-medium"
                >
                    <FontAwesomeIcon icon="angle-left" className=" mr-2" />
                    calender
                </Link>
            </div>
            {/* bottom card slider  */}
            <div className="">
                {/* slider wrapper  */}
                <Swiper slidesPerView={4}>
                    {props.weekData.map((item, index) => {
                        return(
                        <SwiperSlide key={index + "i"} className="">
                            Hello Rejoan
                        </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Week;
