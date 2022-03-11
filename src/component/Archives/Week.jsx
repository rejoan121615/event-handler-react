import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import Tag from "../../ui/Tag";

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
                    <FontAwesomeIcon icon="angle-left" className="mr-3" />
                    calender
                </Link>
                {/* month name  */}
                <h1 className=" display-1 capitalize text-half-yellow mt-6">
                    {props.month}
                </h1>
                {/* week list  */}
                <div className=" flex gap-x-6 mt-6">
                    {[" ", " ", " ", " ", " ", " ", ""].map((week, index) => {
                        return (
                            <h6
                                className="
                                   text-sm rounded-full py-2 px-5 bg-not-white text-white font-medium capitalize
                                   cursor-pointer hover:text-half-yellow hover:bg-hover-yellow transition-all"
                                style={props.style}
                            >
                                Week {index + 1}
                            </h6>
                        );
                    })}
                </div>
            </div>
            {/* bottom card slider  */}
            <div className="mt-16">
                {/* slider wrapper  */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                >
                    {props.weekData.map((item, index) => {
                        return (
                            <SwiperSlide key={index + "i"}>
                                <div
                                    className=" bg-no-repeat h-64 bg-center rounded-3xl p-8 cursor-pointer"
                                    style={{
                                        backgroundImage: `url('${item.background}')`,
                                        backgroundSize: "100%",
                                        backdropFilter: "blur(2px)",
                                    }}
                                >
                                    <h4 className=" text-white text-4xl capitalize font-bo">
                                        {item.name}
                                    </h4>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Week;
