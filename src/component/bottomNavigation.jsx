import React from "react";

const bottomNavigation = (props) => {
  return (
    <footer className="hidden md:block">
      <div className="container pt-0">
        <div className="w-full flex justify-between xl:w-10/12 xl:mx-auto 2xl:w-8/12 mxl:w-7/12">
          {/* links  */}
          <a href="" className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10">sessions</a>
          <a href="" className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10">directory</a>
          <a href="" className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10">submit a question</a>
          <a href="" className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10">meet d team</a>
          <a href="" className="para capitalize py-2 px-6 rounded-full text-[14px] no-underline text-white bg-[#787FAA] lg:px-10">archives</a>
        </div>
      </div>
    </footer>
  )
}


export default bottomNavigation;