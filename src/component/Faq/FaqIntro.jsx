import React from "react";
import useAboutPageCard from "../../HOC/useAboutPageCard";
import ThreeAvatarGroup from "../../ui/ThreeAvatarGroup";

const FaqIntro = (props) => {
    return (
        <React.Fragment>
            <ThreeAvatarGroup />
        </React.Fragment>
    );
};

export default useAboutPageCard(FaqIntro);
