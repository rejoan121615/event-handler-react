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
import Week from "./component/Archives/Week";
import OneImg from "./assets/img/archives/one.jpg";
import Two from "./assets/img/archives/two.jpg";
import Three from "./assets/img/archives/three.jpg";
import Four from "./assets/img/archives/four.jpg";
import Five from "./assets/img/archives/five.jpg";
import Six from "./assets/img/archives/six.jpg";
import OurPlan from "./component/About/OurPlan";


const App = (props) => {
    const [weeks, setWeeks] = useState([
        {
            name: "wednesday",
            date: "Jan 7th, 2022",
            tag: "#UX Design",
            background: OneImg,
        },
        {
            name: "wednesday",
            date: "Jan 7th, 2022",
            tag: "#UX Design",
            background: Two,
        },
        {
            name: "wednesday",
            date: "Jan 7th, 2022",
            tag: "#UX Design",
            background: Three,
        },
        {
            name: "wednesday",
            date: "Jan 7th, 2022",
            tag: "#UX Design",
            background: Four,
        },
        {
            name: "wednesday",
            date: "Jan 7th, 2022",
            tag: "#UX Design",
            background: Five,
        },
        {
            name: "wednesday",
            date: "Jan 7th, 2022",
            tag: "#UX Design",
            background: Six,
        },
    ]);
    return (
        <React.Fragment>
            <Router>
                {/* header links  */}
                <HeaderBar />
                {/* route  */}
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>

                    <Route exact path="/faqs">
                        <h1>Faqs</h1>
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
                    {/* <Route exact path="/archives/week">
                        <Week month={"january"} weekData={weeks} />
                    </Route> */}
                    {/* <Route exact path="/about/our-plan">
                        <OurPlan />
                    </Route> */}
                </Switch>
                <BottomNavigation />
            </Router>
        </React.Fragment>
    );
};

export default App;
