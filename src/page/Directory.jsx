import React from "react";
import HeaderBar from "../component/HeaderBar";
import BottomNavigation from "../component/BottomNavigation";
import DirectoryIntro from "../component/Directory/DirectoryIntro";
import QusAnsPortal from "../component/Directory/QusAnsPortal";


const Home = (props) => {
    return (
        <React.Fragment>
            <HeaderBar />
            <DirectoryIntro />
            <BottomNavigation />
            <QusAnsPortal />
        </React.Fragment>
    );
};

export default Home;
