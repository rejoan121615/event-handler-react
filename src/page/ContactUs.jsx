import React from "react";
import Contact from "../component/Contact/Contact";
import CookieNotification from "../component/CookieNotification";

const ContactUs = () => {
    return (
        <React.Fragment>
            <Contact
                title="Contact Us"
                titleClass="text-[#ff8944]"
                titleDis={["We're here to help,", "Feel free to react out"]}
                para="We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in "
            />
        </React.Fragment>
    );
};

export default ContactUs;
