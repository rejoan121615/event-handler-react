import React, { useState } from "react";
import Input from "../../ui/Input";
import useAboutPageCard from "../../HOC/useAboutPageCard";
import ThreeAvatarGroup from "../../ui/ThreeAvatarGroup";
import SearchIcon from "../../assets/icons/search.png";
import Tag from "../../ui/Tag";
import Accordion from "./Accordion";

const FaqIntro = (props) => {
    const [inputVal, setInputVal] = useState("");

    const changeHandler = (event) => {
        setInputVal(event.target.value);
    };

    // accordion data
    const accordionData = [
        {
            title: "What is Meet 'd' experts",
            content:
                "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        },
        {
            title: "What is Meet D Experts all about?",
            content:
                "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        },
        {
            title: "What is Meet D Experts all about?",
            content:
                "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        },
        {
            title: "What is Meet D Experts all about?",
            content:
                "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        },
        {
            title: "What is Meet D Experts all about?",
            content:
                "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        },
        {
            title: "What is Meet D Experts all about?",
            content:
                "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        },
    ];

    return (
        <React.Fragment>
            {/* <ThreeAvatarGroup /> */}
            <section>
                <div className="container flex flex-col gap-y-6 py-36 sm:flex-row sm:items-center xl:py-0 ">
                    {/* right avatar  */}
                    <div className=" w-6/6 sm:w-3/6 sm:order-1">
                        <ThreeAvatarGroup />
                    </div>
                    {/* left side texts  */}
                    <div className=" w-6/6 sm:w-3/6">
                        {/* <h2
                            className={` font-bold text-yellow text-4xl md:text-5xl lg:text-6xl `}
                        >
                            FAQs
                        </h2>
                        <div className=" mt-4 lg:mt-8">
                            <h4
                                className=" text-white font-bold text-2xl 
                        sm:text-[20px]
                        md:text-[25px]
                        lg:text-[30px] lg:leading-[38px]
                        xl:leading-[45px] xl:text-[35px]"
                            >
                                {[
                                    "",
                                    "Wondering who asked?",
                                    "Well, people talk.",
                                ].map((text, index) => {
                                    return (
                                        <span
                                            key={index + "span"}
                                            className={
                                                index === 1
                                                    ? "block text-[#9d9fa1]"
                                                    : null
                                            }
                                        >
                                            {text}
                                        </span>
                                    );
                                })}
                            </h4>
                        </div> */}
                        {/* para  */}
                        {/* <p
                            className=" 
                                        text-base text-[#CCCCCC] mt-2 w-5/6
                                        md:mt-4 2xl:mt-6
                                        "
                        >
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do not know to frame them, or the answers
                            are not framed in a way that cannot understand.
                            Whether it’s creating AutoLayout in
                        </p> */}
                        {/* tag list  */}
                        {/* {
                            <div className=" flex gap-x-4 flex-wrap">
                                {["UX Design", "UX Design", "UX Design"].map(
                                    (item, index) => {
                                        return (
                                            <Tag
                                                tag={item}
                                                key={` tag${index}`}
                                                className="text-[#fdd365] bg-[#fdd26521]"
                                            />
                                        );
                                    }
                                )}
                            </div>
                        } */}
                        {/* search bar  */}
                        <div className=" mt-10 xl:mt-0 xl:w-5/6">
                            <div className=" bg-[#556166] rounded-full p-2 flex items-center md:p-3">
                                <div
                                    className={`w-8 h-8 flex justify-center items-center rounded-full  md:w-10 md:h-10 bg-[#667175]}`}
                                >
                                    <img
                                        src={SearchIcon}
                                        alt="catagory"
                                        className={`w-7/12 md:w-5/12 ${props.imgCls}`}
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={changeHandler}
                                    placeholder="Search for anything"
                                    className=" rounded-full focus:outline-none pl-2 text-white text-sm sm:text-base w-[85%] bg-[#556166]"
                                />
                            </div>
                        </div>
                        {/* accordion container  */}
                        <div className=" w-10/12 mt-12 flex flex-col gap-y-6">
                            {/* accordion  */}
                            {accordionData.map((accor, index) => {
                                return <Accordion key={'accordion'+index} title={accor.title} content={accor.content} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default FaqIntro;
