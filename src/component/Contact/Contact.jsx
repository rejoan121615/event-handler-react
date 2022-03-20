import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAboutPageCard from "../../HOC/useAboutPageCard";

const Contact = (props) => {
    const socialLinks = [
        {
            icon: "fa-brands fa-linkedin-in",
            link: "linked.con",
        },
        {
            icon: "fa-solid fa-envelope",
            link: "wearecrx@gmail.com",
        },
        {
            icon: "fa-brands fa-twitter",
            link: "twitter.com",
        },
        {
            icon: "fa-brands fa-instagram",
            link: "instagram",
        },
    ];

    return (
      <div className="
          flex flex-wrap gap-4 justify-center  mx-auto
          md:gap-6
          xl:max-w-[450px]
          2xl:gap-12 2xl:max-w-[650px]
    
          ">
            {/* linked in  */}
            {socialLinks.map((link, index) => {
                return (
                  <div className=" 
                      rounded-3xl bg-[#556166] w-24 h-24 flex justify-center items-center
                      xs:w-32 xs:h-32
                      lg:w-40 lg:h-40 
                      xl:w-44 xl:h-44
                      2xl:w-52 2xl:h-52
                      
                      " key={index + 'social'}>
                        <a
                      className=" 
                            bg-[#778185] rounded-full w-12 h-12 justify-center items-center flex
                            xs:w-16 xs:h-16
                            lg:w-24 lg:h-24
                            "
                            href={link.link}
                        >
                            <FontAwesomeIcon
                                icon={link.icon}
                                className=" text-xl text-[#bbc0c2] xs:text-2xl lg:text-[35px]"
                            />
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default useAboutPageCard(Contact);
