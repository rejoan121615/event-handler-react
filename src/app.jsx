import React, { useState, useEffect } from "react";
import HeaderBar from "./component/HeaderBar";
import BottomNavigation from "./component/BottomNavigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
} from "react-router-dom";
import SessionPage from "./component/MainPageIntro";
import Directory from "./page/Directory";
import SubmitAQuestion from "./page/SubmitAQuestion";
import MeetDExpart from "./page/MeetDExpart";
import Archives from "./page/Archives";
import About from "./page/About";
import Faq from "./page/Faq";
import FaqQuestion from "./page/FaqQuestion";
import ContactUs from "./page/ContactUs";
// alert box
import CookieNotification from "./component/CookieNotification";

const App = (props) => {
    const [cookieCom, setCookieCom] = useState("");

    const acceptHandle = () => {
        setCookieCom('')
    };
    const declineHandler = () => {
        setCookieCom('')
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCookieCom(
                <CookieNotification
                    accept={acceptHandle}
                    decline={declineHandler}
                />
            );
        }, 5000);
    }, []);

    return (
        <React.Fragment>
            <Router>
                {/* header links  */}
                <HeaderBar />
                {/* route  */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route exact path="/faqs">
                        <Faq />
                    </Route>
                    <Route exact path="/contact-us">
                        <ContactUs />
                    </Route>
                    <Route exact path="/sessions">
                        <SessionPage />
                    </Route>
                    <Route exact path="/directory">
                        <Directory />
                    </Route>
                    <Route exact path="/submit-a-question">
                        <SubmitAQuestion />
                    </Route>
                    <Route exact path="/meet-d-team">
                        <MeetDExpart />
                    </Route>
                    <Route path="/archives">
                        <Archives />
                        <Redirect to="/archives/calender" />
                    </Route>
                    <Route path="/faq/qus">
                        <FaqQuestion />
                    </Route>
                </Switch>
                <BottomNavigation />
            </Router>
            {cookieCom}
        </React.Fragment>
    );
};

export default App;
