import React from "react";
import GraphIcon from '../../assets/img/icons/graph-icon.png';
import StarIcon from '../../assets/img/icons/Star.png';
import UploadIcon from '../../assets/img/icons/Paper Upload.png';
import UserIcon from '../../assets/img/icons/user.png';


const IntroCard = () => {

  const imgList = [GraphIcon, StarIcon, UploadIcon, UserIcon]

    return (
        <div className=" w-12 gradient">
            <h6 className=" text-white font-medium uppercase text-xl">
                user interface design
            </h6>
            <p className=" text-slate-400 text-base">user inerface design</p>
            {/* btn list  */}
        <div>
          {imgList.map((img, index) => {
            return <a href="#" className=" "><img className=" w-8" src={img} key={index+'i'} alt={img.toString()} /></a>
          })}
               
            </div>
        </div>
    );
};

export default IntroCard;
