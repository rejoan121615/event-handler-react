import React from 'react'
import User from '../../ui/User';

const AttendeesList = () => {
  return (
    <div className=' mt-4'>
      {/* title  */}
          <div className=" px-5 py-[6px] capitalize bg-[#697478] text-[#CCCCCC] text-sm font-medium rounded-full inline-block">
              attendees count <span className=' text-white text-base'>134</span>
      </div>
      {/* user list  */}
      <div className=" mt-5">
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      </div>
  );
}

export default AttendeesList