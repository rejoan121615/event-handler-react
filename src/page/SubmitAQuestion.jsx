import React from "react";
import HeaderBar from '../component/headerBar';
import BottomNavigation from '../component/bottomNavigation';
import AskDExperts from "../component/SubmitQuestion/AskDExperts";

const SubmitAQuestion = () => {
    return (
        <React.Fragment>
            <HeaderBar />
            <AskDExperts />
            <BottomNavigation />
        </React.Fragment>
    );
};

export default SubmitAQuestion;
