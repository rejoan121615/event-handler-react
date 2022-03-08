import React from "react";
import Avatar1 from "../../assets/img/askAquestion/1.png";
import Avatar2 from "../../assets/img/askAquestion/2.png";
import Avatar3 from "../../assets/img/askAquestion/3.png";
import Avatar4 from "../../assets/img/askAquestion/4.png";
import Avatar5 from "../../assets/img/askAquestion/5.png";
import Avatar6 from "../../assets/img/askAquestion/6.png";
import Avatar7 from "../../assets/img/askAquestion/7.png";

const AvatarRow = () => {
    return (
        <div className="w-screen absolute left-0 top-0 h-[92%] mt-[4%]">
            <div className="container h-full">
                <ul className=" list-none flex flex-col items-start gap-x-4 h-full justify-between w-[320px] items-center">
                    <li className=" rounded-full bg-[#3c484d] overflow-hidden w-[130px] h-[130px]">
                        <img src={Avatar1} alt="avatar image" />
                    </li>
                    <li className=" relative w-[160px] h-[160px]">
                        <div className=" rounded-full bg-[#a0a7aa] overflow-hidden">
                            <img
                                src={Avatar2}
                                alt="avatar image"
                                className=" w-full"
                            />
                        </div>
                        <h6
                            className=" 
                                    bg-[#7b8488] text-white font-medium w-44 px-3 py-4 text-xl
                                    text-center rounded-full rounded-bl-none absolute -top-12 right-[-200px]
                            "
                        >
                            Help over here
                        </h6>
                    </li>
                    <li className=" rounded-full bg-[#3c484d] overflow-hidden w-[128px] h-[128px]">
                        <img
                            src={Avatar3}
                            alt="avatar image"
                            className=" w-full"
                        />
                    </li>
                    <li className=" rounded-full bg-[#3c484d] overflow-hidden w-[96px] h-[96px]">
                        <img
                            src={Avatar4}
                            alt="avatar image"
                            className=" w-full"
                        />
                    </li>
                    <li className=" rounded-full bg-[#3c484d] overflow-hidden w-[64px] h-[64px]">
                        <img
                            src={Avatar5}
                            alt="avatar image"
                            className=" w-full"
                        />
                    </li>
                    <li className=" rounded-full bg-[#3c484d] overflow-hidden w-[48px] h-[48px]">
                        <img
                            src={Avatar6}
                            alt="avatar image"
                            className=" w-full"
                        />
                    </li>
                    <li className=" rounded-full bg-[#3c484d] overflow-hidden w-[32px] h-[32px]">
                        <img
                            src={Avatar7}
                            alt="avatar image"
                            className=" w-full"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AvatarRow;
