import React from "react";
import HeaderBar from "./component/HeaderBar";
import BottomNavigation from "./component/BottomNavigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import SessionPage from "./component/MainPageIntro";
import Directory from './page/Directory';
import SubmitAQuestion from "./page/SubmitAQuestion";
import MeetDExpart from "./page/MeetDExpart";
import Archives from './page/Archives';

const App = (props) => {
    return (
        <React.Fragment>
            <Router>
                {/* header links  */}
                <HeaderBar />
                {/* route  */}
                <Switch>
                    <Route exact path="/about"></Route>

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
                    <Route exact path="/archives">
                        <Archives />
                    </Route>
                </Switch>
                <BottomNavigation />
            </Router>
        </React.Fragment>
    );
};

export default App;
