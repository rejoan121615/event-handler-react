import React from "react";
import AboutIntro from "../component/About/AboutIntro";
import OurPlan from "../component/About/OurPlan";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const About = () => {
    const { url, path } = useRouteMatch();
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={url}>
                    <AboutIntro />
                </Route>
                <Route path="/about/our-plan">
                    <OurPlan
                        title="Don’t tell anyone 👀"
                        titleDis={[
                            "We’re here to help",
                            "Feel free to reach out",
                        ]}
                        para="We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in "
                    />
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default About;
