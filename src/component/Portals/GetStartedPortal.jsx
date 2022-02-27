import React from "react";
import ReactDOM from "react-dom";
import StartedCard from "./StartedCard";

const Elements = () => {
    return (
        <section className=" fixed top-0 left-0 w-screen h-screen overflow-y-scroll ">
            {/* backdrop  */}
            <div className=" bg-black opacity-80 w-screen h-screen fixed top-0 left-0"></div>
            {/* content  */}
            <StartedCard />
        </section>
    );
};

const GetStartedPortal = () => {
    return ReactDOM.createPortal(
        <Elements />,
        document.querySelector("#portals-root")
    );
};

export default GetStartedPortal;
