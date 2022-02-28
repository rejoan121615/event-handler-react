import React from "react";
import HeaderBar from "../component/HeaderBar";
import BottomNavigation from "../component/BottomNavigation";
import DirectoryIntro from "../component/Directory/DirectoryIntro";



const Home = (props) => {
    return (
        <React.Fragment>
            <HeaderBar />
            <DirectoryIntro />
            <BottomNavigation />
        </React.Fragment>
    );
};

export default Home;
