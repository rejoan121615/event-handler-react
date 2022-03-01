import React from "react";
import GraphIcon from '../../assets/img/icons/graph-icon.png';
import StarIcon from '../../assets/img/icons/Star.png';
import UploadIcon from '../../assets/img/icons/Paper Upload.png';
import UserIcon from '../../assets/img/icons/user.png';


const IntroCard = () => {

  const imgList = [GraphIcon, StarIcon, UploadIcon, UserIcon]

    return (
        <div className=" bg-intro-card-bd rounded-2xl bg-full-100 px-6 py-8 h-56 flex flex-col justify-between max-w-[280px] mx-auto sm:mx-0">
            <h6 className=" text-white font-medium uppercase text-2xl">
                user interface design
            </h6>
            <p className=" text-slate-400 capitalize text-lg">user inerface design</p>
            {/* btn list  */}
        <div className="  flex justify-start gap-x-3 items-center w-full">
          {imgList.map((img, index) => {
            return (
                <a href="#" key={index + "i"} className=" w-8 h-8 flex justify-center items-center bg-white rounded-full">
                    <img
                        className=" bg-white w-5 block"
                        src={img}
                        alt={img.toString()}
                    />
                </a>
            );
          })}
               
            </div>
        </div>
    );
};

export default IntroCard;
