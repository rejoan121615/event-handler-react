import React from "react";
import Input from "../../ui/Input";
import Email from "../../assets/img/icons/form/Message.png";
import Profile from "../../assets/img/icons/form/Profile.png";
import Work from "../../assets/img/icons/form/Work.png";

const NeedHelpForm = (props) => {
    return (
        <div className="w-2/6 flex justify-center">
            <div className=" max-w-[500px]">
                {/* title  */}
                <div className="">
                    <h1 className=" text-yellow display-1">Need help?</h1>
                    <h1 className=" text-white display-1">Ask 'd' experts</h1>
                </div>
                {/* submit form  */}
                <form action="">
                    <div className="input">
                        <Input
                            icon={Profile}
                            placeholder="Please tell us your name. We promise not to tell anyone"
                            type="text"
                            imgCls="w-[45%]"
                            inpCls=" w-[80%]"
                        />
                        <Input
                            icon={Email}
                            type="email"
                            placeholder="Your email address"
                        />
                        <Input
                            icon={Work}
                            type="text"
                            placeholder="Tell us about that job"
                        />
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
};

export default NeedHelpForm;
