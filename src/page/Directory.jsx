import React, { useState } from "react";
import HeaderBar from "../component/HeaderBar";
import BottomNavigation from "../component/BottomNavigation";
import DirectoryIntro from "../component/Directory/DirectoryIntro";
import QusAnsPortal from "../component/Directory/QusAnsPortal";
import { QusAnsProvider } from "../Context/DirQusAnsPortals";

const Home = (props) => {
    const [qusPortal, usequsPortal] = useState(false);
    // qus ans contexts
    const portalHandler = () => {
        usequsPortal(!qusPortal);
    };
    return (
        <React.Fragment>
            <QusAnsProvider value={{ open: portalHandler }}>
                <DirectoryIntro />
                {qusPortal && <QusAnsPortal />}
            </QusAnsProvider>
        </React.Fragment>
    );
};

export default Home;
