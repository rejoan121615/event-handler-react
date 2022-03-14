import React from "react";
import FaqIntro from "../component/Faq/FaqIntro";

const Faq = () => {
    return (
        <React.Fragment>
            <FaqIntro
                title="FAQs"
                titleClass="text-yellow"
                titleDis={["", "Wondering who asked?", "Well, people talk."]}
                para="We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in "
                tag={["UX Design", "UX Design", "UX Design"]}
                tagClass=" bg-[#555c57] text-yellow"
                search={true}
                change={() => console.log("change something")}
            />
        </React.Fragment>
    );
};

export default Faq;
