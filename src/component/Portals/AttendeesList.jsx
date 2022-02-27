import React from 'react'
import User from '../../ui/User';

const AttendeesList = () => {
  return (
    <div className=' mt-4 lg:mt-0'>
      {/* title  */}
          <div className=" px-5 py-[6px] capitalize bg-[#697478] text-[#CCCCCC] text-sm font-medium rounded-full inline-block">
              attendees count <span className=' text-white text-base'>134</span>
      </div>
      {/* user list  */}
      <div className=" mt-5 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:mt-6 xl:gap-y-2 2xl:gap-y-4">
        <User />
        <User />
        <User />
        <User />
      </div>
      </div>
  );
}

export default AttendeesList