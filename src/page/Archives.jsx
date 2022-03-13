import React, { useState } from "react";
import Calender from "../component/Archives/Calender";
import Week from "../component/Archives/Week";
import OneImg from "../assets/img/archives/one.jpg";
import Two from "../assets/img/archives/two.jpg";
import Three from "../assets/img/archives/three.jpg";
import Four from "../assets/img/archives/four.jpg";
import Five from "../assets/img/archives/five.jpg";
import Six from "../assets/img/archives/six.jpg";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

const Archives = () => {
    let { url, path } = useRouteMatch();
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

    // generate months
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/archives/calender">
                    <Calender />
                </Route>
                <Route exact path="/archives/week">
                    <Week month={"january"} weekData={weeks} />
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default Archives;
