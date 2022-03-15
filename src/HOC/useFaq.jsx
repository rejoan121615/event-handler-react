import React from "react";
import ThreeAvatarGroup from "../ui/ThreeAvatarGroup";

const useFaq = (MainElement) => {
    return class NewElement extends React.Component {
        // return new element
        render() {
            return (
                <section>
                    <div className="container">
                        <ThreeAvatarGroup />
                    </div>
                </section>
            );
        }
    };
};

export default useFaq;
