import React from 'react'
import ConfApp from '../../ui/ConfApp'
import ZoomIcon from '../../assets/img/icons/zoom.png'
import GoogleMeetIcon from '../../assets/img/icons/google-meet.png'

const EventConferApps = () => {
  return (
      <div className=" mt-6 lg:-ml-[400px] lg:max-w-[800px] lg:mt-8 xl:ml-0 xl:mt-0">
          <h6 className="text-xl text-white font-medium capitalize xl:text-[17px] 2xl:text-[18px]">
              event's conferencing app:
          </h6>
          {/* apps  */}
          <div className=" grid grid-cols-2 gap-x-3 mt-4 sm:grid-cols-1 sm:gap-y-6 sm:mt-8 lg:grid-cols-2 xl:grid-cols-1">
              <ConfApp img={ZoomIcon} alt="zoom icon" appName="zoom" />
              <ConfApp
                  active={true}
                  img={GoogleMeetIcon}
                  alt="google icon"
                  appName="google meet"
                  actBg="bg-[#437060]"
              />
          </div>
      </div>
  );
}

export default EventConferApps