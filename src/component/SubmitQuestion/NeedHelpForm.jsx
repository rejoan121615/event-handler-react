import React, { useState, useReducer } from "react";
import Input from "../../ui/Input";
import Email from "../../assets/img/icons/form/Message.png";
import Profile from "../../assets/img/icons/form/Profile.png";
import Work from "../../assets/img/icons/form/Work.png";
import Select from '../../assets/img/icons/form/Category.png'

const NeedHelpForm = (props) => {
    const [formStep, setFormStep] = useState(0);

    const inputFields = [
        [
            {
                type: "text",
                icon: Profile,
                placeholder:
                    "Please tell us your name ... (we will keep it secret)",
            },
            {
                type: "email",
                icon: Email,
                placeholder: "Your email address.",
            },
            {
                type: "text",
                icon: Work,
                placeholder: "Tell us about that job.",
            },
        ],
        [
            {
                type: "select",
                icon: Select,
                placeholder:
                    "Please tell us your name ... (we will keep it secret)",
            }, {
                type: 'textbox',
                icon: Profile
            }
            
        ],
    ];
    // const inputFields = [
    //     {
    //         type: "text",
    //         icon: Profile,
    //         placeholder:
    //             "Please tell us your name ... (we will keep it secret)",
    //     },
    //     {
    //         type: "email",
    //         icon: Email,
    //         placeholder: 'Your email address.'
    //     }, {
    //         type: 'text',
    //         icon: Work,
    //         placeholder: 'Tell us about that job.'
    //     }
    // ];

    // submit handle
    const submitHandle = (event) => {
        event.preventDefault();
        setFormStep(1);
    };

    return (
        <div className="w-2/6 flex justify-center relative z-30">
            <div className=" max-w-[550px] w-screen">
                {/* title  */}
                <div className="">
                    <h1 className=" text-yellow display-1">Need help?</h1>
                    <h1 className=" text-white display-1">Ask 'd' experts</h1>
                </div>
                {/* submit form  */}
                <form action="" className=" mt-10" onSubmit={submitHandle}>
                    <div className="input flex flex-col gap-y-6">
                        {inputFields[formStep].map((input, index) => {
                            return (
                                <Input
                                    icon={input.icon}
                                    placeholder={input.placeholder}
                                    type={input.type}
                                    key={index + "input"}
                                />
                            );
                        })}
                        <div>
                            <Input
                                type="submit"
                                value={!formStep ? "procced" : "submit"}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NeedHelpForm;
