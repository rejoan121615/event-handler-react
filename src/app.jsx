import React from "react";
import HeaderBar from "./component/HeaderBar";
import BottomNavigation from "./component/BottomNavigation";
import { Switch, Route, Redirect } from "react-router-dom";
import SessionPage from "./component/MainPageIntro";

const App = (props) => {
    return (
        <React.Fragment>
            <HeaderBar />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/sessions" />
                </Route>
                <Route exact path="/about">
                    {/* <Directory /> */}
                </Route>

                <Route exact path="/faqs">
                    <h1>Faqs</h1>
                </Route>
                <Route exact path="/contact-us">
                    <h1>Hello Rejoan</h1>
                </Route>
                <Route to="/sessions">
                    <SessionPage />
                </Route>
                <Route to="/directory">directory</Route>
                <Route to="/submit-a-question">submit a question</Route>
                <Route to="/meet-d-team">meet d team</Route>
                <Route to="/archives">archives</Route>
            </Switch>
            <BottomNavigation />
        </React.Fragment>
    );
};

export default App;
