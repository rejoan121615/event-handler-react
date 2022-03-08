import React from "react";
import Insta from "../../assets/icons/social/insta.png";
import Twitter from "../../assets/icons/social/twitter.png";
import Message from "../../assets/icons/social/message.png";
import LinkedIn from "../../assets/icons/social/linked-in.png";

const SocialLinks = (props) => {
    const socialList = [
        {
            img: Insta,
            url: "instagram.com",
            alt: "instagram img",
        },
        {
            img: Twitter,
            url: "twitter.com",
            alt: "twitter icon",
        },
        {
            img: Message,
            url: "wearecrx@gmail.com",
            alt: "gmail icon",
        },
        {
            img: LinkedIn,
            url: "linkedin.com",
            alt: "linked in icon",
        },
    ];
    return (
        <div className=" w-2/6 relative z-20">
            <div
                className={` flex flex-col items-end gap-y-5 ${props.className}`}
            >
                {socialList.map((item, index) => {
                    return (
                        <a
                            className=" w-12 h-12 rounded-full bg-[#8e9599] flex items-center justify-center "
                            href={item.url}
                            key={index + "i"}
                        >
                            <img
                                className=" w-[22px]"
                                src={item.img}
                                alt={item.alt}
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default SocialLinks;
