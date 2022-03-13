import React, { useState } from "react";
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

const App = (props) => {
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
                        <h1>Hello Rejoan</h1>
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
                </Switch>
                <BottomNavigation />
            </Router>
        </React.Fragment>
    );
};

export default App;
