import React from 'react'
import Avatar1 from "../../assets/img/askAquestion/1.png";
import Avatar2 from "../../assets/img/askAquestion/2.png";
import Avatar3 from "../../assets/img/askAquestion/3.png";
import Avatar4 from "../../assets/img/askAquestion/4.png";
import Avatar5 from "../../assets/img/askAquestion/5.png";
import Avatar6 from "../../assets/img/askAquestion/6.png";
import Avatar7 from "../../assets/img/askAquestion/7.png";



const AvatarRow = () => {
  return (
      <div className="">
          <ul className=" list-none flex items-center gap-x-4">
              <li className=" rounded-full bg-[#3c484d] overflow-hidden">
                  <img src={Avatar1} alt="avatar image" />
              </li>
              <li className=" relative">
                  <div className=" rounded-full bg-[#a0a7aa] overflow-hidden">
                      <img
                          src={Avatar2}
                          alt="avatar image"
                          className=" w-full"
                      />
                  </div>
                  <h6
                      className=" 
                                    absolute -bottom-10 bg-[#7b8488] left-5 text-white font-medium w-28 px-3 py-2 text-xs
                                    text-center rounded-full rounded-tl-none
                            "
                  >
                      Help over here
                  </h6>
              </li>
              <li className=" rounded-full bg-[#3c484d] overflow-hidden">
                  <img src={Avatar3} alt="avatar image" className=" w-full" />
              </li>
              <li className=" rounded-full bg-[#3c484d] overflow-hidden">
                  <img src={Avatar4} alt="avatar image" className=" w-full" />
              </li>
              <li className=" rounded-full bg-[#3c484d] overflow-hidden">
                  <img src={Avatar5} alt="avatar image" className=" w-full" />
              </li>
              <li className=" rounded-full bg-[#3c484d] overflow-hidden">
                  <img src={Avatar6} alt="avatar image" className=" w-full" />
              </li>
              <li className=" rounded-full bg-[#3c484d] overflow-hidden">
                  <img src={Avatar7} alt="avatar image" className=" w-full" />
              </li>
          </ul>
      </div>
  );
}

export default AvatarRow