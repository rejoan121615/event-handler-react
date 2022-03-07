import React from "react";
import LeftAvatarRow from './AvatarRow';
import NeedHelpForm from "./NeedHelpForm";


const AskDExperts = () => {
    return (
        <section>
            <div className="container">
                {/* left cartoon logo  */}
                <LeftAvatarRow />
                {/* center form  */}
                <NeedHelpForm />
            </div>
        </section>
    );
};

export default AskDExperts;
