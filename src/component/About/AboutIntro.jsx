import React from "react";
import One from "../../assets/img/about/one.jpg";
import Two from "../../assets/img/about/two.jpg";
import Three from "../../assets/img/about/three.jpg";
import Four from "../../assets/img/about/four.jpg";
import Five from "../../assets/img/about/five.jpg";
import Six from "../../assets/img/about/six.jpg";

const AboutIntro = () => {
    const ImgList = [One, Two, Three, Four, Five, Six];
    return (
        <section>
            <div className="container flex flex-col sm:flex-row sm:items-center">
                {/* right avatar  */}
                <div className=" w-6/6 sm:w-3/6 sm:order-1">
                    <div
                        className=" bg-[#556166] rounded-[30px] p-8 grid grid-cols-2 grid-rows-3 gap-4 justify-items-center max-w-[350px] mx-auto
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
                </div>
                {/* left side texts  */}
                <div className=" w-6/6 sm:w-3/6">
                    <h2
                        className=" text-third font-bold text-4xl
                    md:text-5xl
                    lg:text-6xl"
                    >
                        Get to Know Us
                    </h2>
                    <div className=" mt-4 lg:mt-8">
                      <h4 className=" text-white font-bold text-2xl 
                        sm:text-[20px]
                        md:text-[25px]
                        lg:text-[30px] lg:leading-[38px]
                        xl:leading-[45px] xl:text-[35px]">
                            We’re here to help,
                            <span className="block text-[#9d9fa1]">
                                Feel free to ask Questions on
                            </span>
                            Various Topics.
                        </h4>
                    </div>
                    {/* tag list  */}
                    <div className=""></div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
