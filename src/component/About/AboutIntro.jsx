import React from "react";
import AboutCard from "./AboutCard";

const AboutIntro = () => {
    return (
        <React.Fragment>
            <AboutCard
                title="Get to Know Us"
                
                titleDis={[
                    "We' here to help",
                    "Feel free to ask Questions on",
                    "Various Topics",
                ]}
                tag={[
                    "UX Design",
                    "React js",
                    "Angular",
                    "Tailwind Css",
                    "Figma",
                ]}
            />
        </React.Fragment>
    );
};

export default AboutIntro;
