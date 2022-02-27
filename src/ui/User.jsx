import React from 'react'
import UserImg from '../assets/img/users/user.png'

const User = () => {
  return (
      <div className=" flex mb-2 last:mb-0">
          {/* img  */}
          <div className=" bg-[#4c575c] rounded-full w-[45px] h-[45px] flex justify-center items-center overflow-hidden">
              <img src={UserImg} alt="user img  " />
          </div>
          {/* text  */}
          <div className=" flex flex-col ml-3">
              <h6 className=" font-medium text-white capitalize">
                  adeyinka johnson <span className=" text-primary">joined</span>
              </h6>
              <p className=" text-zinc-400 capitalize">just now</p>
          </div>
      </div>
  );
}

export default User