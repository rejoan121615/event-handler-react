import React from "react";
import Tag from "../Tag";
import ThumbnailLists from "../ThumbnailLists";
import Thum1 from "../../assets/img/directory/Hero Page/unsplash_8uZPynIu-rQ.png";
import Thum2 from "../../assets/img/directory/Hero Page/unsplash_OlTjeydUpQw.png";
import Thum3 from "../../assets/img/directory/Hero Page/unsplash_pVq6YhmDPtk.png";
import Thum4 from "../../assets/img/directory/Hero Page/unsplash_Tyg0rVhOTrE.png";
import { QusAnsConsumer } from "../../Context/DirQusAnsPortals";

const GetRightAns = (props) => {
    return (
        <div className={`${props.className}`}>
            {/* title  */}
            <div>
                <h1 className="display-1 sm:text-4xl text-[#ffb9b9] leading-10 sm:leading-[105%] md:text-[50px] lg:text-[45px] xl:text-[58px] 2xl:text-[64px]">
                    Get ‘d’ right answers on
                </h1>
                <h1 className="display-1 sm:text-4xl leading-10 sm:leading-[105%] text-white md:text-[50px] lg:text-[45px] xl:text-[58px] 2xl:text-[64px]">
                    User Interface Design
                </h1>
            </div>
            {/* skill  */}
            <div className=" flex gap-2 flex-wrap mt-4">
                <Tag
                    style={{
                        color: "#ffb9b9",
                        marginTop: "0px",
                        marginLeft: "0px",
                    }}
                    tag="UX Design"
                />
                <Tag
                    style={{
                        color: "#ffb9b9",
                        marginTop: "0px",
                        marginLeft: "0px",
                    }}
                    tag="UX Design"
                />
                <Tag
                    style={{
                        color: "#ffb9b9",
                        marginTop: "0px",
                        marginLeft: "0px",
                    }}
                    tag="UX Design"
                />
            </div>
            {/* para  */}
            <p className="para text-white mt-4 font-normal">
                We exist to help people get answers to questions threy’ve not
                found. Either that they cannot ask them or they do not know to
                frame them, or the answers are not framed in a way that can be
                understood. Whether it’s creating AutoLayout in Figma, to making
                Stir-Fry Spaghettis-Don Corleone style, we are here to help you
                get the answers you need.
            </p>
            {/* question and answer  */}
            <QusAnsConsumer>
                {(value) => {
                    return (
                        <ThumbnailLists
                            click={value.open}
                            items={[Thum1, Thum2, Thum3, Thum4]}
                            big={true}
                            text="456 Question answered"
                            textStyle={"text-sec"}
                            className="mt-4"
                        />
                    );
                }}
            </QusAnsConsumer>
        </div>
    );
};

export default GetRightAns;
