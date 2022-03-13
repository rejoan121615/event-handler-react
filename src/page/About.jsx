import React from "react";
import AboutIntro from "../component/About/AboutIntro";
import { Route, Switch } from "react-router-dom";

const About = () => {
    return (
        <React.Fragment>
            <AboutIntro />
            <Switch>
                <Route path="/about/our-plan">
                    <OurPlan />
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default About;
