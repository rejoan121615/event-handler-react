import React from "react";
import LeftAvatarRow from './AvatarRow';
import NeedHelpForm from "./NeedHelpForm";
import SocialLinks from "./SocialLinks";


const AskDExperts = () => {
    return (
        <section>
            <div className="container flex justify-end items-center">
                {/* left cartoon logo  */}
                <LeftAvatarRow />
                {/* center form  */}
                <NeedHelpForm />
                {/* social links  */}
                <SocialLinks />
            </div>
        </section>
    );
};

export default AskDExperts;
