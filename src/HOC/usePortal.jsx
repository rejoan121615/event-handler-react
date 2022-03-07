import React from "react";
import ReactDOM from "react-dom";

const PortalElement = (props) => {
    return (
        <section className=" fixed top-0 left-0 w-screen h-screen overflow-y-scroll flex justify-center items-center">
            {/* backdrop  */}
            <div className=" bg-black opacity-80 w-screen h-screen fixed top-0 left-0"></div>
            {/* content  */}
            <div className={`relative p-5 bg-[#546166] rounded-[30px] ${props.className}`}>
                {props.children}
            </div>
        </section>
    );
};

const usePortal = (PushedComponent, styleClass) => {
    return class NewClassess extends React.Component {
        // state
        state = {
            show: false,
        };

        // return compoent
        render() {
            return ReactDOM.createPortal(
                <PortalElement className={styleClass}>
                    <PushedComponent/>
                </PortalElement>,
                // <h1>Hello rejoan</h1>,
                document.getElementById("portals-root")
            );
        }
    };
};

export default usePortal;
