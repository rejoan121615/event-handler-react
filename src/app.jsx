import React from "react";
import HeaderBar from "./component/HeaderBar";
import BottomNavigation from "./component/BottomNavigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { withRouter } from 'react-router'
import SessionPage from "./component/MainPageIntro";

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
                        <h1>Hello Mohd Rejoan</h1>
                    </Route>

                    <Route exact path="/salam">
                        <h1>Salam alai kum</h1>
                    </Route>
                </Switch>
                <BottomNavigation />
            </Router>
        </React.Fragment>
    );
};

export default App;
