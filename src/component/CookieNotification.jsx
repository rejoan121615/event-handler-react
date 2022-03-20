import React from "react";
import ReactDOM from "react-dom";
import Btn from "../ui/Btn";

const CookieComponent = (props) => {
  console.log(props)
    const acceptHandler = () => {
        props.accept();
    };

    const declineHandler = () => {
        props.decline();
    };
    return (
        <div className=" fixed left-0 bottom-10 z-50 w-screen">
            <div className=" bg-[#243953] w-11/12 mx-auto rounded-2xl px-8 py-10 md:flex md:items-center md:gap-x-12 xl:gap-x-20 xl:px-12 xl:justify-between">
                {/* texts  */}
                <div className=" md:w-4/6">
                    <h1 className=" display-1 text-white">
                        Cookie Notification
                    </h1>
                    <p className="para text-white mt-4 ">
                        This website uses cookies to optimize your experience
                        and to provide us insight on how to interact with the
                        site. All information shared with us through cookies are
                        secure and covered by our data privacy obligations. You
                        can access our Privacy Policy{" "}
                        <a
                            href=""
                            className=" text-half-yellow font-bold border-b-2 pb-1 border-half-yellow"
                        >
                            here
                        </a>
                    </p>
                </div>
                {/* buttons  */}
                <div className=" mt-6 flex flex-col gap-y-4 xs:flex-row md:w-2/6 md:flex-col xl:flex-row xl:justify-end">
                    <button
                        onClick={declineHandler}
                        className=" text-white
                     px-8 py-3 rounded-full font-bold capitalize
                    lg:px-10 lg:py-4 pointer text-center xl:px-16"
                    >
                        declined
                    </button>
                    <button
                        onClick={acceptHandler}
                        className="bg-[#3e5168] text-white
                     px-8 py-3 rounded-full font-bold capitalize
                    lg:px-10 lg:py-4 pointer text-center xl:px-16"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

const CookieNotification = (props) => {
    return ReactDOM.createPortal(
        <CookieComponent {...props} />,
        document.querySelector("#portals-root")
    );
};

export default CookieNotification;
